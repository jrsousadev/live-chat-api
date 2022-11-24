import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { GetUserService } from "./GetUserService";

class GetUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getUserService = container.resolve(GetUserService);

      const user: any = await getUserService.execute({ id });

      if (user.message) throw new AppError(user.message, user.statusCode);

      return response.status(200).json(user);
    } catch (err: any) {
      return response.status(err.statusCode).json(err);
    }
  }
}

export default new GetUserController();
