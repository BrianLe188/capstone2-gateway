import { Namespace } from "socket.io";
import { Socket } from "socket.io-client";

const advise = (io: Namespace, { adviseIo }: { adviseIo: Socket }) => {
  io.on("connection", (socket) => {
    console.log(`${socket.id} connect`);
    socket.on("chat", ({ type, content, file }) => {
      adviseIo.emit("chat", { type, content, file });
    });

    adviseIo.on("receive_message", ({ content }) => {
      socket.emit("receive_message", { content, type: "ai" });
    });
  });
};

export default advise;
