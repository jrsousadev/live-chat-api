import { Router } from "express";
import { createChatFactory } from "../../modules/chat/create-chat/create-chat-factory";
import { createGroupChatFactory } from "../../modules/chat/create-group-chat/create-group-chat-factory";
import { getAllChatsByUserFactory } from "../../modules/chat/get-all-chats-by-user/get-all-chats-by-user-factory";
import { getChatFactory } from "../../modules/chat/get-chat/get-chat-factory";

const chatRoutes = Router();

chatRoutes.post("/", (request, response, next) => {
    createChatFactory().handle(request, response, next)
});
chatRoutes.post("/group", (request, response, next) => {
    createGroupChatFactory().handle(request, response, next)
});
chatRoutes.get("/user/:userId", (request, response, next) => {
    getAllChatsByUserFactory().handle(request, response, next)
});
chatRoutes.get("/:id", (request, response, next) => {
    getChatFactory().handle(request, response, next)
});

export default chatRoutes;
