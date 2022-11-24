import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { name, image } = request.body;

      const createUserService = container.resolve(CreateUserService);

      const user: any = await createUserService.execute({ name, image });

      if (user.message) throw new AppError(user.message, user.statusCode);

      return response.status(201).json(user);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new CreateUserController();
