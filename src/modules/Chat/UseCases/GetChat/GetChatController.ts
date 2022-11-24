import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetChatService } from "./GetChatService";

class GetChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getChatService = container.resolve(GetChatService);

      const chat: any = await getChatService.execute({ id });

      if (chat.message) throw new AppError(chat.message, chat.statusCode);

      return response.status(200).json(chat);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetChatController();
