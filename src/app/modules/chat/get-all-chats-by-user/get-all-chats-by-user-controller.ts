import { NextFunction, Request, Response } from "express";
import { GetAllChatsByUserUseCase } from "./get-all-chats-by-user-usecase";

export class GetAllChatsByUserController {
  constructor(private getAllChatsByUser: GetAllChatsByUserUseCase){}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { userId } = request.params;

      const chats = await this.getAllChatsByUser.execute({ userId });

      return response.status(200).json(chats);
    } catch (err) {
      next(err);
    }
  }
}
