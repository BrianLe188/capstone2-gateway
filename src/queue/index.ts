import { Channel, Message } from "amqplib";
import { MyEventEmitter } from "../events";

const queue = async ({ channel }: { channel: Channel }) => {
  const messageExchange = "file";
  const returnMessageQueue = "return_path";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(returnMessageQueue);

  MyEventEmitter.on("upload_file", (data) => {
    channel.publish(messageExchange, "write", data.buffer);
  });

  channel.consume(
    returnMessageQueue,
    (msg) => {
      const content = msg?.content;
      if (content) {
        MyEventEmitter.emit("return_path", { path: content.toString() });
      }
      channel.ack(msg as Message);
    },
    {
      noAck: false,
    }
  );
};

export default queue;
