import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetMessageService } from "./GetMessageService";

class GetMessageController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const getMessageService = container.resolve(GetMessageService);
      const message = await getMessageService.execute({ id });

      return response.status(200).json(message);
    } catch (err) {
      next(err);
    }
  }
}

export default new GetMessageController();
