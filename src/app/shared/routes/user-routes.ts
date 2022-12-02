import { Router } from "express";

import createUserController from "../../controllers/user/create-user-controller";
import getUserController from "../../controllers/user/get-user-controller";

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/:id", getUserController.handle);

export default userRoutes;
