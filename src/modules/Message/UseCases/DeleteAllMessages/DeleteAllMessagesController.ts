import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteAllMessagesService } from "./DeleteAllMessagesService";

class DeleteAllMessagesController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const deleteAllMessagesService = container.resolve(DeleteAllMessagesService);

      const messages: any = await deleteAllMessagesService.execute();

      if (messages.message) throw new AppError(messages.message, messages.statusCode);

      return response.status(200).json(messages);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new DeleteAllMessagesController();
