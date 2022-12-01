import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateChatService } from "./CreateChatService";

class CreateChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { userOne, userTwo } = request.body;

      const createChatService = container.resolve(CreateChatService);
      const chat = await createChatService.execute({ userOne, userTwo });

      return response.status(201).json(chat);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateChatController();
