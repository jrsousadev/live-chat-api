import { inject, injectable } from "tsyringe";
import { UserModule } from "../../UserModule";

interface CreateUserRequest {
  name: string;
  image: string;
}

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserModule")
    private userModule: UserModule
  ) {}

  execute = async ({ image, name }: CreateUserRequest) => {
    try {
      return await this.userModule.create({
        image,
        name,
      });
    } catch (err) {
      throw err;
    }
  };
}
