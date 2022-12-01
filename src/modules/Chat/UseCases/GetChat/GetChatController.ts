import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetChatService } from "./GetChatService";

class GetChatController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const getChatService = container.resolve(GetChatService);
      const chat = await getChatService.execute({ id });

      return response.status(200).json(chat);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetChatController();
