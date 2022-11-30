import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetLastMessageByChatService } from "./GetLastMessageByChatService";

class GetLastMessageByChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId } = request.params;

      if (!chatId) {
        return response.status(200).json([]);
      }

      const getLastMessageByChatService = container.resolve(
        GetLastMessageByChatService
      );
      const lastMessage = await getLastMessageByChatService.execute({ chatId });

      return response.status(200).json(lastMessage);
    } catch (err) {
      return response
        .status(400)
        .json({
          message: "Internal error when trying to read the last chat message",
        });
    }
  }
}

export default new GetLastMessageByChatController();
