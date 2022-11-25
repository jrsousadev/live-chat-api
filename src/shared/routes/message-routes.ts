import { Router } from "express";

import CreateMessageController from "../../modules/Message/UseCases/CreateMessage/CreateMessageController";
import DeleteAllMessagesController from "../../modules/Message/UseCases/DeleteAllMessages/DeleteAllMessagesController";
import GetAllMessagesByChatController from "../../modules/Message/UseCases/GetAllMessagesByChat/GetAllMessagesByChatController";
import GetLastMessageByChatController from "../../modules/Message/UseCases/GetLastMessageByChat/GetLastMessageByChatController";
import GetMessageController from "../../modules/Message/UseCases/GetMessage/GetMessageController";

const messageRoutes = Router();

messageRoutes.post("/", CreateMessageController.handle);
messageRoutes.get("/chat/:chatId", GetAllMessagesByChatController.handle);
messageRoutes.get("/lastMessage/:chatId", GetLastMessageByChatController.handle);
messageRoutes.get("/:id", GetMessageController.handle);
messageRoutes.delete("/all", DeleteAllMessagesController.handle);

export default messageRoutes;