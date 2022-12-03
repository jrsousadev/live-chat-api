import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";
import { ChatModule } from "../../chat/chat-module";
import { UserModule } from "../../user/user-module";
import { MessageModule } from "../message-module";
import { CreateMessageController } from "./create-message-controller";
import { CreateMessageUseCase } from "./create-message-usecase";
import { config } from "../../../../config";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const createMessageFactory = () => {
  const messageRepository = TEST_ENVIRONMENT
    ? new InMemoryMessageRepository()
    : new MessageModule();

  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();

  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();

  const createMessage = new CreateMessageUseCase(
    messageRepository,
    userRepository,
    chatRepository
  );

  const createMessageController = new CreateMessageController(createMessage);
  return createMessageController;
};
