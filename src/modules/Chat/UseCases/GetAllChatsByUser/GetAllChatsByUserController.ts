import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetAllChatsByUserService } from "./GetAllChatsByUserService";

class GetAllChatsByUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { userId } = request.params;

      const getAllChatsByUserService = container.resolve(GetAllChatsByUserService);
      const chats = await getAllChatsByUserService.execute({ userId });

      return response.status(200).json(chats);
    } catch (err: any) {
      return response.status(400).json({
        message: "Internal error trying to read all user chats"
      });
    }
  }
}

export default new GetAllChatsByUserController();
