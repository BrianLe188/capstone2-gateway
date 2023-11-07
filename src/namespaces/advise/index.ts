import { Namespace } from "socket.io";
import { Socket } from "socket.io-client";
import { MyEventEmitter } from "../../events";
import authServiceClient from "../../services/auth";
import crypto from "crypto";

type User = {
  id: string;
  socket: string;
  fullName: string;
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
        resolve(res?.data);
      }
    );
  });
};

const advise = async (io: Namespace, { adviseIo }: { adviseIo: Socket }) => {
  const availableSocket = new Map();

  io.on("connection", async (socket) => {
    let user: User | null = null;
    console.log(`${socket.id} connect`);
    const token = socket.handshake.headers.token as string;

    socket.on("assign_socket", async () => {
      try {
        if (token) {
          const _verify = await verify<{
            id: string;
            email: string;
            socket: string;
          }>(token);
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
                  resolve(res?.user);
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
        if (user) {
          availableSocket.set(user?.id, socket);
          MyEventEmitter.emit("my_conversations", { me: user.id });
        }
      } catch (error) {
        console.log(error);
      }
    });

    adviseIo.on("receive_message", ({ content, type, room, sender }) => {
      // socket.emit("receive_message", { content, type, room, sender });
      io.to(room).emit("receive_message", { content, type, room, sender });
    });

    MyEventEmitter.on(
      "send_back_room_to_send_message",
      (room: { _id: string }, extend) => {
        io.to(room._id).emit("receive_message", extend);
      }
    );

    MyEventEmitter.on(
      "send_back_room_to_connect",
      async (room: { _id: string }, _, sender) => {
        availableSocket.get(sender)?.join(room._id);
      }
    );

    MyEventEmitter.on("send_back_rooms", ({ rooms, me }: any) => {
      availableSocket.get(me)?.emit("my_conversations", rooms);
    });

    socket.on("connect_room", async ({ target, roomId, token }) => {
      const _verify = await verify<{
        id: string;
        email: string;
        socket: string;
      }>(token);
      console.log(_verify);
      MyEventEmitter.emit("connect_room", {
        sender: _verify.id,
        receiver: target,
        roomId: roomId,
        back: "send_back_room_to_connect",
      });
    });

    socket.on(
      "chat",
      async ({ type, content, file, room, target, token }: any) => {
        const _verify = await verify<{ id: string; email: string }>(token);
        if (_verify) {
          MyEventEmitter.emit("connect_room", {
            sender: _verify.id,
            receiver: target,
            roomId: room,
            back: "send_back_room_to_send_message",
            extend: {
              content,
              type,
              room,
              sender: _verify.id,
            },
          });
          // adviseIo.emit("chat", {
          //   type,
          //   content,
          //   file,
          //   room,
          //   sender: _verify.id,
          // });
          // io.to(room).emit("receive_message", {
          //   content,
          //   type,
          //   room,
          //   sender: _verify.id,
          // });
        }
      }
    );

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnect`);
      // socket.disconnect();
    });
  });
};

export default advise;
