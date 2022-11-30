import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetMessageService } from "./GetMessageService";

class GetMessageController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getMessageService = container.resolve(GetMessageService);
      const message = await getMessageService.execute({ id });

      return response.status(200).json(message);
    } catch (err) {
      return response.status(400).json({
        message: "Internal error when trying to read a message"
      });
    }
  }
}

export default new GetMessageController();
