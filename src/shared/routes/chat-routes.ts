import { Router } from "express";
import CreateChatController from "../../modules/Chat/UseCases/CreateChat/CreateChatController";
import GetAllChatsByUserController from "../../modules/Chat/UseCases/GetAllChatsByUser/GetAllChatsByUserController";
import GetChatController from "../../modules/Chat/UseCases/GetChat/GetChatController";

const chatRoutes = Router();

chatRoutes.post("/", CreateChatController.handle);
chatRoutes.get("/user/:userId", GetAllChatsByUserController.handle)
chatRoutes.get("/:id", GetChatController.handle);

export default chatRoutes;