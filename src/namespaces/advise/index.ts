import { Namespace } from "socket.io";
import { Socket } from "socket.io-client";
import { MyEventEmitter } from "../../events";
import authServiceClient from "../../services/auth";
import crypto from "crypto";

type User = {
  id: string;
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

const verify = async <T>(token: string): Promise<T> => {
  return await new Promise((resolve, reject) => {
    authServiceClient.VerifyToken(
      {
        token,
      },
      (err: any, res: any) => {
        if (err) {
          reject("Error");
        }
        resolve(res.data);
      }
    );
  });
};

const advise = (io: Namespace, { adviseIo }: { adviseIo: Socket }) => {
  io.on("connection", async (socket) => {
    console.log(`${socket.id} connect`);
    const token = socket.handshake.headers.token as string;
    socket.on("assign_socket", async () => {
      let user: User;
      try {
        if (token) {
          const _verify = await verify<{ id: string; email: string }>(token);
          if (_verify) {
            user = await new Promise((resolve, reject) => {
              authServiceClient.UpdateUser(
                {
                  id: _verify.id,
                  body: {
                    socket: socket.id,
                  },
                },
                (err: any, res: any) => {
                  if (err) {
                    reject("Error");
                  }
                  resolve(res.user);
                }
              );
            });
          }
        } else {
          user = await new Promise((resolve, reject) => {
            const random = crypto.randomBytes(10).toString();
            authServiceClient.CreateUser(
              {
                user: {
                  email: `${random}@gmail.com`,
                  password: "123",
                  fullName: random,
                  socket: socket.id,
                },
                role: {
                  name: "quest",
                },
              },
              (err: any, res: any) => {
                if (err) {
                  reject("Error");
                }
                resolve(res?.user);
              }
            );
          });
          if (user) {
            socket.emit("assign_token", user.token.accessToken);
          }
        }
      } catch (error) {}
    });

    socket.on("chat", ({ type, content, file }) => {
      adviseIo.emit("chat", { type, content, file });
    });

    adviseIo.on("receive_message", ({ content }) => {
      socket.emit("receive_message", { content, type: "ai" });
    });

    socket.on("connect_room", async ({ target }) => {
      if (token) {
        const _verify = await verify<{ id: string; email: string }>(token);
        if (_verify) {
          MyEventEmitter.emit("connect_room", {
            sender: _verify.id,
            receiver: target,
          });
        }
      }
    });
  });
};

export default advise;
