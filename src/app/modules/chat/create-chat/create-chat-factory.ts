import { CreateChatController } from "./create-chat-controller";
import { ChatModule } from "../chat-module";
import { CreateChatUseCase } from "./create-chat-usecase";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { config } from "../../../../config";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";
import { UserModule } from "../../user/user-module";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const createChatFactory = () => {
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();
  const createChat = new CreateChatUseCase(chatRepository, userRepository);
  const createChatController = new CreateChatController(createChat);
  return createChatController;
};
