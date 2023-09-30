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

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const adviseIo = clientIo("http://localhost:4998/advise");

function main() {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(bodyParser.json());

  app.use(clientRoute);

  advise(io.of("/advise"), { adviseIo });

  server.listen(process.env.GATEWAY_API_PORT, () => {
    console.log(
      `Gateway api in running on ${process.env.GATEWAY_API_HOST}:${process.env.GATEWAY_API_PORT}`
    );
  });
}

main();
