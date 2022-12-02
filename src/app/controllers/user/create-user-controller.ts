import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "../../usecases/user/create-user-usecase";

class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { name, image } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);
      const user = await createUserUseCase.execute({ name, image });

      return response.status(201).json(user);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateUserController();
