import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetAllMessagesByChatService } from "./GetAllMessagesByChatService";

class GetAllMessagesByChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getAllMessagesByChatService = container.resolve(GetAllMessagesByChatService);
      const messages = await getAllMessagesByChatService.execute({ chatId });

      return response.status(200).json(messages);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetAllMessagesByChatController();
