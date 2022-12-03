import { NextFunction, Request, Response } from "express";
import { GetAllMessagesByChatUseCase } from "./get-all-messages-by-chat-usecase";

export class GetAllMessagesByChatController {
  constructor(private getAllMessagesByChat: GetAllMessagesByChatUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!chatId) {
        return response.status(200).json([]);
      }

      const messages = await this.getAllMessagesByChat.execute({ chatId });

      return response.status(200).json(messages);
    } catch (err) {
      next(err);
    }
  }
}
