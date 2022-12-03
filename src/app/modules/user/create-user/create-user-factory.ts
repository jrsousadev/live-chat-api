import { UserRepository } from "../../../repositories/user-repository";
import { UserModule } from "../user-module";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

export const createUserFactory = (
    InMemoryUserRepository?: UserRepository
) => {
  const userRepository = InMemoryUserRepository ?? new UserModule();
  const createUser = new CreateUserUseCase(
    userRepository
  );
  const createUserController = new CreateUserController(
    createUser
  );
  return createUserController;
};
