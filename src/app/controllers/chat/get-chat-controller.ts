import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { GetChatUseCase } from "../../usecases/chat/get-chat-usecase";

class GetChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      const getChatUseCase = container.resolve(GetChatUseCase);
      const chat = await getChatUseCase.execute({ id });

      return response.status(200).json(chat);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetChatController();
