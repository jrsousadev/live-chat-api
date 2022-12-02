import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../shared/errors/AppError";
import { GetAllMessagesByChatUseCase } from "../../usecases/message/get-all-messages-by-chat-usecase";
import { validObjectId } from "../../utils/validObjectId";

class GetAllMessagesByChatController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getAllMessagesByChatUseCase = container.resolve(
        GetAllMessagesByChatUseCase
      );
      const messages = await getAllMessagesByChatUseCase.execute({ chatId });

      return response.status(200).json(messages);
    } catch (err) {
      next(err);
    }
  }
}

export default new GetAllMessagesByChatController();
