import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserService } from "./GetUserService";
class GetUserController {
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params;

      const getUserService = container.resolve(GetUserService);
      const user = await getUserService.execute({ id });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({message: "Internal server error"})
    }
  }
}

export default new GetUserController();
