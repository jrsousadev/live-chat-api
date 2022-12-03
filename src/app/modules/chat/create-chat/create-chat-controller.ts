import { NextFunction, Request, Response } from "express";
import { CreateChatUseCase } from "./create-chat-usecase";

export class CreateChatController {
  constructor(private createChat: CreateChatUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { userOne, userTwo } = request.body;

      const chat = await this.createChat.execute({ userOne, userTwo });

      return response.status(201).json(chat);
    } catch (err) {
      next(err)
    }
  }
}
