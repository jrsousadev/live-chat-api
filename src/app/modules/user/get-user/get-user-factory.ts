import { UserRepository } from "../../../repositories/user-repository";
import { UserModule } from "../user-module";
import { GetUserController } from "./get-user-controller";
import { GetUserUseCase } from "./get-user-usecase";

export const getUserFactory = () => {
  const userRepository = new UserModule();
  const getUser = new GetUserUseCase(
    userRepository
  );
  const getUserController = new GetUserController(getUser);
  return getUserController;
};
