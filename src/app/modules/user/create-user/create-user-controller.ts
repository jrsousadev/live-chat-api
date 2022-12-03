import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { name, image } = request.body;

      const user = await this.createUser.execute({ name, image });

      return response.status(201).json(user);
    } catch (err) {
      next(err)
    }
  }
}
