import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateGroupChatService } from "./CreateGroupChatService";

class CreateGroupChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { users, groupName, groupImage } = request.body;

      const createGroupChatService = container.resolve(CreateGroupChatService);

      const chat: any = await createGroupChatService.execute({
        users,
        groupName,
        groupImage,
      });

      if (chat.message) throw new AppError(chat.message, chat.statusCode);

      return response.status(201).json(chat);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new CreateGroupChatController();
