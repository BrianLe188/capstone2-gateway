import { Channel, Message } from "amqplib";
import { MyEventEmitter } from "../events";

const queue = async ({ channel }: { channel: Channel }) => {
  const messageExchange = "file";
  const admissionExchange = "admission";
  const returnMessageQueue = "return_path";
  const connectRoomQueue = "connect_room";

  await channel.assertExchange(messageExchange, "direct");
  await channel.assertExchange(admissionExchange, "direct");
  await channel.assertQueue(returnMessageQueue);

  await channel.assertQueue(connectRoomQueue);

  MyEventEmitter.on("upload_file", (data) => {
    channel.publish(messageExchange, "write", data.buffer);
  });

  MyEventEmitter.on(
    "apply_admission",
    ({ form, data }: { form: string; data: Record<string, any> }) => {
      channel.publish(
        admissionExchange,
        "apply",
        Buffer.from(JSON.stringify({ form, data }))
      );
    }
  );

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

  MyEventEmitter.on("connect_room", (data) => {
    channel.sendToQueue(connectRoomQueue, Buffer.from(JSON.stringify(data)));
  });
};

export default queue;
