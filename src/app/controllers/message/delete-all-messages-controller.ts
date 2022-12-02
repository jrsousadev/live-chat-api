import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAllMessagesUseCase } from "../../usecases/message/delete-all-messages-usecase";

class DeleteAllMessagesController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const deleteAllMessagesUseCase = container.resolve(
        DeleteAllMessagesUseCase
      );

      const messages = await deleteAllMessagesUseCase.execute();

      return response.status(200).json(messages);
    } catch (err) {
      next(err);
    }
  }
}

export default new DeleteAllMessagesController();
