import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetAllChatsByUserService } from "./GetAllChatsByUserService";

class GetAllChatsByUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { userId } = request.params;

      if (!validObjectId(userId)) throw new AppError("id invalid", 400);

      const getAllChatsByUserService = container.resolve(
        GetAllChatsByUserService
      );
      const chats = await getAllChatsByUserService.execute({ userId });

      return response.status(200).json(chats);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetAllChatsByUserController();
