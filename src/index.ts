import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import clientRoute from "./routes";

const app = express();

app.use(bodyParser.json());

app.use(clientRoute);

app.listen(process.env.GATEWAY_API_PORT, () => {
  console.log(
    `Gateway api in running on ${process.env.GATEWAY_API_HOST}:${process.env.GATEWAY_API_PORT}`
  );
});
