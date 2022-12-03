import { NextFunction, Request, Response } from "express";
import { GetLastMessageByChatUseCase } from "./get-last-message-by-chat-usecase";

export class GetLastMessageByChatController {
  constructor(private getLastMessageByChat: GetLastMessageByChatUseCase) {}
 
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

      const lastMessage = await this.getLastMessageByChat.execute({ chatId });

      return response.status(200).json(lastMessage);
    } catch (err) {
      next(err);
    }
  }
}
