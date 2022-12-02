import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMessageUseCase } from "../../usecases/message/create-message-usecase";

class CreateMessageController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { chatId, issuer, text } = request.body;

      const createMessageUseCase = container.resolve(CreateMessageUseCase);
      const message = await createMessageUseCase.execute({ chatId, issuer, text });

      return response.status(201).json(message);
    } catch (err) {
      next(err)
    }
  }
}

export default new CreateMessageController();
