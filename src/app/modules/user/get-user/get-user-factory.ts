import { UserModule } from "../user-module";
import { GetUserController } from "./get-user-controller";
import { GetUserUseCase } from "./get-user-usecase";
import { config } from "../../../../config";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getUserFactory = () => {
  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();
  const getUser = new GetUserUseCase(userRepository);
  const getUserController = new GetUserController(getUser);
  return getUserController;
};
