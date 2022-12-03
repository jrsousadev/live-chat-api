import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";
interface GetUserRequest {
  id: string;
}

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async ({ id }: GetUserRequest) => {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) throw new AppError("User is not exist");

      return user;
    } catch (err) {
      throw err;
    }
  };
}
