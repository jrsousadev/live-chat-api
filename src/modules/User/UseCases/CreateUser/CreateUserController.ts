import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { name, image } = request.body;

      const createUserService = container.resolve(CreateUserService);
      const user = await createUserService.execute({ name, image });

      return response.status(201).json(user);
    } catch (err) {
      return response
        .status(400)
        .json({
          message: "Internal error when trying to create the user",
        });
    }
  }
}

export default new CreateUserController();
