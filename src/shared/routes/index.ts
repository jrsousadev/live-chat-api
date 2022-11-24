import { Router } from "express";

import messageRoutes from "./message-routes";
import userRoutes from "./user-routes";
import chatRoutes from "./chat-routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/message", messageRoutes);
routes.use("/chat", chatRoutes);

export default routes;
