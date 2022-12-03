import { NextFunction, Request, Response } from "express";
import { UserModule } from "../user-module";
import { GetUserUseCase } from "./get-user-usecase";

export class GetUserController {
  constructor(private getUser: GetUserUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id } = request.params;
      
      const user = await this.getUser.execute({ id });

      return response.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
