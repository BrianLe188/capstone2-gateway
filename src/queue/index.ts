import { Channel } from "amqplib";
import { MyEventEmitter } from "../events";

const queue = async ({ channel }: { channel: Channel }) => {
  const messageExchange = "file";

  await channel.assertExchange(messageExchange, "direct");

  MyEventEmitter.on("upload_file", (data) => {
    channel.publish(messageExchange, "write", data.file.buffer);
  });
};

export default queue;
