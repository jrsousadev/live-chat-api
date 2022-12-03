import { NextFunction, Request, Response } from "express";
import { GetChatUseCase } from "./get-chat-usecase";

export class GetChatController {
  constructor(private getChat: GetChatUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = request.params;

      const chat = await this.getChat.execute({ id });

      return response.status(200).json(chat);
    } catch (err) {
      next(err);
    }
  }
}
