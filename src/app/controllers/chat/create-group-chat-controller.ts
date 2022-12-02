import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupChatUseCase } from "../../usecases/chat/create-group-chat-usecase";

class CreateGroupChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { users, groupName, groupImage } = request.body;

      const createGroupChatUseCase = container.resolve(CreateGroupChatUseCase);
      const chat = await createGroupChatUseCase.execute({
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
