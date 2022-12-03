import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";

interface CreateUserRequest {
  name: string;
  image: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (data: CreateUserRequest) => {
    try {
      if (data.image === "") throw new AppError("The image property is required")
      if (data.name === "") throw new AppError("The name property is required")

      return await this.userRepository.create(data);
    } catch (err) {
      throw err;
    }
  };
}
