import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAllMessagesService } from "./DeleteAllMessagesService";

class DeleteAllMessagesController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const deleteAllMessagesService = container.resolve(DeleteAllMessagesService);

      const messages = await deleteAllMessagesService.execute();

      return response.status(200).json(messages);
    } catch (err) {
      next(err)
    }
  }
}

export default new DeleteAllMessagesController();
