import { UserModule } from "../user-module";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";
import { config } from "../../../../config";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const createUserFactory = () => {
  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();
  const createUser = new CreateUserUseCase(userRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
};
