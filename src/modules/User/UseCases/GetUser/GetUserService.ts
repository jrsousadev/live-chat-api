import { inject, injectable } from "tsyringe";
import { UserModule } from "../../UserModule";
interface GetUserRequest {
  id: string;
}
@injectable()
export class GetUserService {
  constructor(
    @inject("UserModule")
    private userModule: UserModule
  ) {}

  execute = async ({ id }: GetUserRequest) => {
    try {
      return await this.userModule.readOne({
        id,
      });
    } catch (err) {
      throw err;
    }
  };
}
