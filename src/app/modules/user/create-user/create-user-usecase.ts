import { UserRepository } from "../../../repositories/user-repository";

interface CreateUserRequest {
  name: string;
  image: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute = async (data: CreateUserRequest) => {
    try {
      return await this.userRepository.create(data);
    } catch (err) {
      throw err;
    }
  };
}
