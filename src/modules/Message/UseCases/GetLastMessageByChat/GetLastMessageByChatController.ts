import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetLastMessageByChatService } from "./GetLastMessageByChatService";

class GetLastMessageByChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getLastMessageByChatService = container.resolve(
        GetLastMessageByChatService
      );
      const lastMessage = await getLastMessageByChatService.execute({ chatId });

      return response.status(200).json(lastMessage);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetLastMessageByChatController();
