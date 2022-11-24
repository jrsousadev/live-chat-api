import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetLastMessageByChatService } from "./GetLastMessageByChatService";

class GetLastMessageByChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getLastMessageByChatService = container.resolve(GetLastMessageByChatService);

      const lastMessage: any = await getLastMessageByChatService.execute({ chatId });

      if (lastMessage.message) throw new AppError(lastMessage.message, lastMessage.statusCode);

      return response.status(200).json(lastMessage);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetLastMessageByChatController();
