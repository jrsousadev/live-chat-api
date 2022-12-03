import { NextFunction, Request, Response } from "express";

import { CreateMessageUseCase } from "./create-message-usecase";

export class CreateMessageController {
  constructor(private createMessage: CreateMessageUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { chatId, issuer, text } = request.body;

      const message = await this.createMessage.execute({
        chatId,
        issuer,
        text,
      });

      return response.status(201).json(message);
    } catch (err) {
      next(err);
    }
  }
}
