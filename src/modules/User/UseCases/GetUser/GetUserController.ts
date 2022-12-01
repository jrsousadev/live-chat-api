import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { validObjectId } from "../../../../utils/validObjectId";
import { GetUserService } from "./GetUserService";
class GetUserController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const getUserService = container.resolve(GetUserService);
      const user = await getUserService.execute({ id });

      return response.status(200).json(user);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetUserController();
