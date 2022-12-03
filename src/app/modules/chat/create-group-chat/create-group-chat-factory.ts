import { ChatModule } from "../chat-module";
import { CreateGroupChatUseCase } from "./create-group-chat-usecase";
import { CreateGroupChatController } from "./create-group-chat-controller";
import { config } from "../../../../config";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { UserModule } from "../../user/user-module";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const createGroupChatFactory = () => {
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();
  const createGroupChat = new CreateGroupChatUseCase(
    chatRepository,
    userRepository
  );
  const createGroupChatController = new CreateGroupChatController(
    createGroupChat
  );
  return createGroupChatController;
};
