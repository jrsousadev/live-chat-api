import { NextFunction, Request, Response } from "express";
import { DeleteAllMessagesUseCase } from "./delete-all-messages-usecase";

export class DeleteAllMessagesController {
  constructor(private deleteAllMessages: DeleteAllMessagesUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const messages = await this.deleteAllMessages.execute();

      return response.status(200).json(messages);
    } catch (err) {
      next(err);
    }
  }
}
