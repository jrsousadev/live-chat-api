import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../shared/errors/AppError";
import { GetUserUseCase } from "../../usecases/user/get-user-usecase";
import { validObjectId } from "../../utils/validObjectId";

class GetUserController {
  async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = request.params;

      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const getUserUseCase = container.resolve(GetUserUseCase);
      const user = await getUserUseCase.execute({ id });

      return response.status(200).json(user);
    } catch (err) {
      next(err)
    }
  }
}

export default new GetUserController();
