import { Router } from "express";

import createMessageController from "../../controllers/message/create-message-controller";
import deleteAllMessagesController from "../../controllers/message/delete-all-messages-controller";
import getAllMessagesByChatController from "../../controllers/message/get-all-messages-by-chat-controller";
import getLastMessageByChatController from "../../controllers/message/get-last-message-by-chat-controller";
import getMessageController from "../../controllers/message/get-message-controller";

const messageRoutes = Router();

messageRoutes.post("/", createMessageController.handle);
messageRoutes.get("/chat/:chatId", getAllMessagesByChatController.handle);
messageRoutes.get("/lastMessage/:chatId", getLastMessageByChatController.handle);
messageRoutes.get("/:id", getMessageController.handle);
messageRoutes.delete("/all", deleteAllMessagesController.handle);

export default messageRoutes;