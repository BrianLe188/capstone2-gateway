import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import clientRoute from "./routes";
import { Server } from "socket.io";
import { createServer } from "http";
import advise from "./namespaces/advise";
import { io as clientIo } from "socket.io-client";
import amqp from "amqplib";
import queue from "./queue";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const adviseIo = clientIo("http://localhost:4998/advise");

async function main() {
  try {
    const amqpConnection = await amqp.connect("amqp://127.0.0.1");
    const channel = await amqpConnection.createChannel();

    app.use(morgan("dev"));
    app.use(cors());
    app.use(bodyParser.json());

    app.use(clientRoute);

    advise(io.of("/advise"), { adviseIo });

    queue({ channel });

    server.listen(process.env.GATEWAY_API_PORT, () => {
      console.log(
        `Gateway api in running on ${process.env.GATEWAY_API_HOST}:${process.env.GATEWAY_API_PORT}`
      );
    });
  } catch (error) {
    setInterval(() => {
      main();
    }, 1000);
  }
}

main();
