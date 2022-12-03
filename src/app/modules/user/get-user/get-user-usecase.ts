import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

interface GetUserRequest {
  id: string;
}

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async ({ id }: GetUserRequest) => {
    try {
      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      return await this.userRepository.findById(id);
    } catch (err) {
      throw err;
    }
  };
}
