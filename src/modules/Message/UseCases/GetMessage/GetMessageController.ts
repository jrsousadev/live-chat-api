import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetMessageService } from "./GetMessageService";

class GetMessageController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getMessageService = container.resolve(GetMessageService);

      const message: any = await getMessageService.execute({ id });

      if (message.message) throw new AppError(message.message, message.statusCode);

      return response.status(200).json(message);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetMessageController();
