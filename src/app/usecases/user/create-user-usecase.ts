import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/user-repository";

interface CreateUserRequest {
  name: string;
  image: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserModule")
    private userRepository: UserRepository
  ) {}

  execute = async (data: CreateUserRequest) => {
    try {
      return await this.userRepository.create(data);
    } catch (err) {
      throw err;
    }
  };
}
