import { io } from "./app";
import { MessageModule } from "../modules/message-module";

const messageModule = new MessageModule();

io.on("connection", (socket) => {
  socket.on("select_chat", async (data, callback) => {
    socket.join(data.chatId);

    const messagesPerChat = await messageModule.findAllByChat(data.chatId);

    if (typeof callback === "function") {
      callback(messagesPerChat);
    }
  });

  socket.on("message", async (data, callback) => {
    const newMessage = await messageModule.create(data.message);
    const getNewMessage = await messageModule.findById(newMessage.id);

    io.to(data.message.chatId).emit("message", getNewMessage);
  });
});
