import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllMessagesByChatService } from "./GetAllMessagesByChatService";

class GetAllMessagesByChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getAllMessagesByChatService = container.resolve(GetAllMessagesByChatService);
      const messages = await getAllMessagesByChatService.execute({ chatId });

      return response.status(200).json(messages);
    } catch (err) {
      return response.status(400).json({
        message: "Internal error trying to read all messages"
      });
    }
  }
}

export default new GetAllMessagesByChatController();
