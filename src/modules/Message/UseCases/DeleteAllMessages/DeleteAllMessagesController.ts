import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAllMessagesService } from "./DeleteAllMessagesService";

class DeleteAllMessagesController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const deleteAllMessagesService = container.resolve(DeleteAllMessagesService);

      const messages = await deleteAllMessagesService.execute();

      return response.status(200).json(messages);
    } catch (err) {
      return response.status(400).json({
        message: "Internal error when trying to delete messages"
      });
    }
  }
}

export default new DeleteAllMessagesController();
