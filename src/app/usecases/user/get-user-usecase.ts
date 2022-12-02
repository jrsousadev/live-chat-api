import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/user-repository";

interface GetUserRequest {
  id: string;
}

@injectable()
export class GetUserUseCase {
  constructor(
    @inject("UserModule")
    private userRepository: UserRepository
  ) {}

  execute = async ({ id }: GetUserRequest) => {
    try {
      return await this.userRepository.findById(id);
    } catch (err) {
      throw err;
    }
  };
}
