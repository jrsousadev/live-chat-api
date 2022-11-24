import { Router } from "express";

import CreateUserController from "../../modules/User/UseCases/CreateUser/CreateUserController";
import GetUserController from "../../modules/User/UseCases/GetUser/GetUserController";

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);
userRoutes.get("/:id", GetUserController.handle);

export default userRoutes;