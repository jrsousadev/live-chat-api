import { Router } from "express";

import CreateMessageController from "../../modules/Message/UseCases/CreateMessage/CreateMessageController";
import GetAllMessagesByChatController from "../../modules/Message/UseCases/GetAllMessagesByChat/GetAllMessagesByChatController";
import GetLastMessageByChatController from "../../modules/Message/UseCases/GetLastMessageByChat/GetLastMessageByChatController";
import GetMessageController from "../../modules/Message/UseCases/GetMessage/GetMessageController";

const messageRoutes = Router();

messageRoutes.post("/", CreateMessageController.handle);
messageRoutes.get("/chat/:chatId", GetAllMessagesByChatController.handle);
messageRoutes.get("/lastMessage/:chatId", GetLastMessageByChatController.handle);
messageRoutes.get("/:id", GetMessageController.handle);

export default messageRoutes;