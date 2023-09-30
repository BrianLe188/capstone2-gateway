import { Namespace } from "socket.io";
import { Socket } from "socket.io-client";

const advise = (io: Namespace, { adviseIo }: { adviseIo: Socket }) => {
  io.on("connection", (socket) => {
    adviseIo.emit("chat", { message: "hello" });
    adviseIo.on("chat", ({ message }) => {
      console.log(message);
    });
  });
};

export default advise;
