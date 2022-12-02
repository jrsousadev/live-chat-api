import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllChatsByUserUseCase } from "../../usecases/chat/get-all-chats-by-user-usecase";
class GetAllChatsByUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { userId } = request.params;

      const getAllChatsByUserUseCase = container.resolve(
        GetAllChatsByUserUseCase
      );
      const chats = await getAllChatsByUserUseCase.execute({ userId });

      return response.status(200).json(chats);
    } catch (err) {
      next(err);
    }
  }
}

export default new GetAllChatsByUserController();
