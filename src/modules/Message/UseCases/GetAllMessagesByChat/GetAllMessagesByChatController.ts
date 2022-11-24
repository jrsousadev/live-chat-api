import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetAllMessagesByChatService } from "./GetAllMessagesByChatService";

class GetAllMessagesByChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getAllMessagesByChatService = container.resolve(GetAllMessagesByChatService);

      const messages: any = await getAllMessagesByChatService.execute({ chatId });

      if (messages.message) throw new AppError(messages.message, messages.statusCode);

      return response.status(200).json(messages);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetAllMessagesByChatController();
