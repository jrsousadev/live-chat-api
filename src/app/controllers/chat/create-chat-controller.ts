import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateChatUseCase } from "../../usecases/chat/create-chat-usecase";

class CreateChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { userOne, userTwo } = request.body;

      const createChatUseCase = container.resolve(CreateChatUseCase);
      const chat = await createChatUseCase.execute({ userOne, userTwo });

      return response.status(201).json(chat);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateChatController();
