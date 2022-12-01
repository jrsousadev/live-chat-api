import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupChatService } from "./CreateGroupChatService";

class CreateGroupChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { users, groupName, groupImage } = request.body;

      const createGroupChatService = container.resolve(CreateGroupChatService);
      const chat = await createGroupChatService.execute({
        users,
        groupName,
        groupImage,
      });

      return response.status(201).json(chat);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateGroupChatController();
