import { io } from "./app";
import { v4 as uuidv4 } from "uuid";

interface RoomUser {
  socket_id: string;
  username: string;
  room: string;
}

interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
  id: string;
}

const users: RoomUser[] = [];
const messages: Message[] = [];

io.on("connection", (socket) => {
  socket.on("select_room", (data, callback) => {
    socket.join(data.room);

    const message = {
      room: data.room,
      text: `${data.username} enter the room`,
      createdAt: new Date(),
      username: "SYSTEM-SOCKET.IO",
      id: uuidv4(),
    }

    messages.push(message);

    io.to(data.room).emit("message", message);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.rom
    );

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }

    const messagesRoom = getMessagesRoom(data.room);
    if (typeof callback === "function") {
      callback(messagesRoom);
    }
  });

  socket.on("message", (data) => {
    const message: Message = {
      room: data.room,
      username: data.username,
      text: data.message,
      createdAt: new Date(),
      id: uuidv4(),
    };

    messages.push(message);

    io.to(data.room).emit("message", message);
  });

  socket.on("disconnect-user-room", (data) => {
    const message = {
      room: data.room,
      text: `${data.username} leave the room`,
      createdAt: new Date(),
      username: "SYSTEM-SOCKET.IO",
      id: uuidv4(),
    }

    messages.push(message)

    io.to(data.room).emit("message", message);
  });
});

const getMessagesRoom = (room: string) => {
  const messagesRoom = messages.filter((message) => message.room === room);
  return messagesRoom;
};
