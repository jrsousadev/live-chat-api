import { Router } from "express";

import { createMessageFactory } from "../../modules/message/create-message/create-message-factory";
import { deleteAllMessagesFactory } from "../../modules/message/delete-all-messages/delete-all-messages-factory";
import { getAllMessagesByChatFactory } from "../../modules/message/get-all-messages-by-chat/get-all-messages-by-chat-factory";
import { getLastMessageByChatFactory } from "../../modules/message/get-last-message-by-chat/get-last-message-by-chat-factory";
import { getMessageFactory } from "../../modules/message/get-message/get-message-factory";

const messageRoutes = Router();

messageRoutes.post("/", (request, response, next) => {
    createMessageFactory().handle(request, response, next)
});
messageRoutes.get("/chat/:chatId", (request, response, next) => {
    getAllMessagesByChatFactory().handle(request, response, next)
});
messageRoutes.get("/lastMessage/:chatId", (request, response, next) => {
    getLastMessageByChatFactory().handle(request, response, next)
});
messageRoutes.get("/:id", (request, response, next) => {
    getMessageFactory().handle(request, response, next)
});
messageRoutes.delete("/all", (request, response, next) => {
    deleteAllMessagesFactory().handle(request, response, next)
});

export default messageRoutes;
