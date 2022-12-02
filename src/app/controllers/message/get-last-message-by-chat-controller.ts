import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../shared/errors/AppError";
import { GetLastMessageByChatUseCase } from "../../usecases/message/get-last-message-by-chat-usecase";
import { validObjectId } from "../../utils/validObjectId";

class GetLastMessageByChatController {
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

      const getLastMessageByChatUseCase = container.resolve(
        GetLastMessageByChatUseCase
      );
      const lastMessage = await getLastMessageByChatUseCase.execute({ chatId });

      return response.status(200).json(lastMessage);
    } catch (err) {
      next(err);
    }
  }
}

export default new GetLastMessageByChatController();
