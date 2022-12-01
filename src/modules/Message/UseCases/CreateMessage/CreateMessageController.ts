import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMessageService } from "./CreateMessageService";

class CreateChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { chatId, issuer, text } = request.body;

      const createMessageService = container.resolve(CreateMessageService);
      const message = await createMessageService.execute({ chatId, issuer, text });

      return response.status(201).json(message);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateChatController();
