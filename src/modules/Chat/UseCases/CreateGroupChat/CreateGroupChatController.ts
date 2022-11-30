import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupChatService } from "./CreateGroupChatService";

class CreateGroupChatController {
  async handle(request: Request, response: Response): Promise<any> {
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
      return response.status(400).json({
        message: "Internal error when trying to create a group chat",
      });
    }
  }
}

export default new CreateGroupChatController();
