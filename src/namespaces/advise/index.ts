import { Namespace } from "socket.io";
import { Socket } from "socket.io-client";

const advise = (io: Namespace, { adviseIo }: { adviseIo: Socket }) => {
  io.on("connection", (socket) => {
    socket.on("chat", ({ type, content }) => {
      console.log({ type, content });
      adviseIo.emit("chat", { type, content });
    });

    socket.on("receive_message", ({ content }) => {
      socket.emit("receive_message", { content, type: "ai" });
    });
  });
};

export default advise;
