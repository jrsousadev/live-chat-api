import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateMessageService } from "./CreateMessageService";

class CreateChatController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { chatId, issuer, recipient, text } = request.body;

      const createMessageService = container.resolve(CreateMessageService);

      const message: any = await createMessageService.execute({ chatId, issuer, recipient, text });

      if (message.message) throw new AppError(message.message, message.statusCode);

      return response.status(201).json(message);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new CreateChatController();
