import { Router } from "express";
import { createUserFactory } from "../../modules/user/create-user/create-user-factory";
import { getUserFactory } from "../../modules/user/get-user/get-user-factory";

const userRoutes = Router();

userRoutes.post("/", (request, response, next) => {
    createUserFactory().handle(request, response, next)
});
userRoutes.get("/:id", (request, response, next) => {
    getUserFactory().handle(request, response, next)
});

export default userRoutes;
