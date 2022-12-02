import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../shared/errors/AppError";
import { GetMessageUseCase } from "../../usecases/message/get-message-usecase";
import { validObjectId } from "../../utils/validObjectId";

class GetMessageController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const getMessageUseCase = container.resolve(GetMessageUseCase);
      const message = await getMessageUseCase.execute({ id });

      return response.status(200).json(message);
    } catch (err) {
      next(err);
    }
  }
}

export default new GetMessageController();
