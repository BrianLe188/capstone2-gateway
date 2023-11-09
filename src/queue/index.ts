import { Channel, Message } from "amqplib";
import { MyEventEmitter } from "../events";

const queue = async ({ channel }: { channel: Channel }) => {
  const fileExchange = "file";
  // const messageExchange = "message";
  const admissionExchange = "admission";
  const returnMessageQueue = "return_path";
  const connectRoomQueue = "connect_room_queue";
  const sendBackRoomQueue = "send_back_room_queue";
  const sendBackRoomsQueue = "send_back_rooms_queue";
  const roomQueue = "room_queue";
  const messageQueue = "message_queue";

  await channel.assertExchange(fileExchange, "direct");
  await channel.assertExchange(admissionExchange, "direct");
  // await channel.assertExchange(messageExchange, "direct");
  await channel.assertQueue(returnMessageQueue);

  await channel.assertQueue(connectRoomQueue);
  await channel.assertQueue(sendBackRoomQueue);
  await channel.assertQueue(sendBackRoomsQueue);
  await channel.assertQueue(roomQueue);
  await channel.assertQueue(messageQueue);

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
        const { room, back, extend, sender } = JSON.parse(content.toString());
        MyEventEmitter.emit(back, room, extend, sender);
      }
    },
    {
      noAck: true,
    }
  );

  channel.consume(
    sendBackRoomsQueue,
    (msg) => {
      const content = msg?.content;
      if (content) {
        const { rooms, me } = JSON.parse(content.toString());
        MyEventEmitter.emit("send_back_rooms", { rooms, me });
      }
    },
    {
      noAck: true,
    }
  );

  MyEventEmitter.on("connect_room", (data) => {
    channel.sendToQueue(connectRoomQueue, Buffer.from(JSON.stringify(data)));
  });

  MyEventEmitter.on("my_conversations", (data: { me: string }) => {
    channel.sendToQueue(roomQueue, Buffer.from(JSON.stringify(data)));
  });

  MyEventEmitter.on("save_message", (data) => {
    channel.sendToQueue(messageQueue, Buffer.from(JSON.stringify(data)));
  });
};

export default queue;
