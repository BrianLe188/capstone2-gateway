import { Channel, Message } from "amqplib";
import { MyEventEmitter } from "../events";

const queue = async ({ channel }: { channel: Channel }) => {
  const fileExchange = "file";
  const messageExchange = "message";
  const admissionExchange = "admission";
  const returnMessageQueue = "return_path";
  const connectRoomQueue = "connect_room_queue";
  const sendBackRoomQueue = "send_back_room_queue";
  const sendBackRoomsQueue = "send_back_rooms_queue";

  await channel.assertExchange(fileExchange, "direct");
  await channel.assertExchange(admissionExchange, "direct");
  await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(returnMessageQueue);

  await channel.assertQueue(connectRoomQueue);
  await channel.assertQueue(sendBackRoomQueue);
  await channel.assertQueue(sendBackRoomsQueue);

  MyEventEmitter.on("upload_file", (data) => {
    channel.publish(fileExchange, "write", data.buffer);
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

  channel.consume(
    sendBackRoomQueue,
    (msg) => {
      const content = msg?.content;
      if (content) {
        const room = JSON.parse(content.toString());
        MyEventEmitter.emit("send_back_room", room);
      }
      channel.ack(msg as Message);
    },
    {
      noAck: false,
    }
  );

  channel.consume(
    sendBackRoomsQueue,
    (msg) => {
      const content = msg?.content;
      if (content) {
        const rooms = JSON.parse(content.toString());
        MyEventEmitter.emit("send_back_rooms", rooms);
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

  MyEventEmitter.on("my_conversations", (data: { me: string }) => {
    channel.publish(
      messageExchange,
      "get_my_room",
      Buffer.from(JSON.stringify(data))
    );
  });
};

export default queue;
