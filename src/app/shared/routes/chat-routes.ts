import { Router } from "express";

import createChatController from "../../controllers/chat/create-chat-controller";
import createGroupChatController from "../../controllers/chat/create-group-chat-controller";
import getAllChatsByUserController from "../../controllers/chat/get-all-chats-by-user-controller";
import getChatController from "../../controllers/chat/get-chat-controller";

const chatRoutes = Router();

chatRoutes.post("/", createChatController.handle);
chatRoutes.post("/group", createGroupChatController.handle);
chatRoutes.get("/user/:userId", getAllChatsByUserController.handle);
chatRoutes.get("/:id", getChatController.handle);

export default chatRoutes;
