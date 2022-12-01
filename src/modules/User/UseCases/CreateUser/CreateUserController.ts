import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { name, image } = request.body;

      const createUserService = container.resolve(CreateUserService);
      const user = await createUserService.execute({ name, image });

      return response.status(201).json(user);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateUserController();
