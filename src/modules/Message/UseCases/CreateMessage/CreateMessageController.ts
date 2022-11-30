import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMessageService } from "./CreateMessageService";

class CreateChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId, issuer, text } = request.body;

      const createMessageService = container.resolve(CreateMessageService);
      const message = await createMessageService.execute({ chatId, issuer, text });

      return response.status(201).json(message);
    } catch (err) {
      return response.status(400).json({
        message: "Internal error trying to create the message"
      });
    }
  }
}

export default new CreateChatController();
