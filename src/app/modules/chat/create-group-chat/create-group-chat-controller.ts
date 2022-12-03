import { NextFunction, Request, Response } from "express";
import { CreateGroupChatUseCase } from "./create-group-chat-usecase";

export class CreateGroupChatController {
  constructor(private createGroupChat: CreateGroupChatUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { users, groupName, groupImage } = request.body;

      const chat = await this.createGroupChat.execute({
        users,
        groupName,
        groupImage,
      });

      return response.status(201).json(chat);
    } catch (err) {
      next(err);
    }
  }
}
