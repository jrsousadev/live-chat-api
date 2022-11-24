import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetAllChatsByUserService } from "./GetAllChatsByUserService";

class GetAllChatsByUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { userId } = request.params;

      const getAllChatsByUserService = container.resolve(GetAllChatsByUserService);

      const chats: any = await getAllChatsByUserService.execute({ userId });

      if (chats.message) throw new AppError(chats.message, chats.statusCode);

      return response.status(200).json(chats);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetAllChatsByUserController();
