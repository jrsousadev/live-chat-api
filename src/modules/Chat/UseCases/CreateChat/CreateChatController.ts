import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateChatService } from "./CreateChatService";

class CreateChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { userOne, userTwo } = request.body;

      const createChatService = container.resolve(CreateChatService);

      const chat: any = await createChatService.execute({ userOne, userTwo });

      if (chat.message) throw new AppError(chat.message, chat.statusCode);

      return response.status(201).json(chat);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new CreateChatController();
