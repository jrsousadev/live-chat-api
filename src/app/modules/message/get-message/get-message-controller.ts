import { NextFunction, Request, Response } from "express";
import { GetMessageUseCase } from "./get-message-usecase";

export class GetMessageController {
  constructor(private getMessage: GetMessageUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = request.params;

      const message = await this.getMessage.execute({ id });

      return response.status(200).json(message);
    } catch (err) {
      next(err);
    }
  }
}
