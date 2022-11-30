import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetChatService } from "./GetChatService";

class GetChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getChatService = container.resolve(GetChatService);
      const chat = await getChatService.execute({ id });

      return response.status(200).json(chat);
    } catch (err) {
      return response.status(400).json({
        message: "Internal error when trying to read a chat"
      });
    }
  }
}

export default new GetChatController();
