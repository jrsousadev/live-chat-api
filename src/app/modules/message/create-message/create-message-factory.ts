import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";
import { ChatModule } from "../../chat/chat-module";
import { UserModule } from "../../user/user-module";
import { MessageModule } from "../message-module";
import { CreateMessageController } from "./create-message-controller";
import { CreateMessageUseCase } from "./create-message-usecase";

const JEST_ENV = process.env.JEST as string;

export const createMessageFactory = () => {
  const messageRepository =
    JEST_ENV === "ACTIVE"
      ? new InMemoryMessageRepository()
      : new MessageModule();

  const userRepository =
    JEST_ENV === "ACTIVE" ? new InMemoryUserRepository() : new UserModule();

  const chatRepository =
    JEST_ENV === "ACTIVE" ? new InMemoryChatRepository() : new ChatModule();

  const createMessage = new CreateMessageUseCase(
    messageRepository,
    userRepository,
    chatRepository
  );
  
  const createMessageController = new CreateMessageController(createMessage);
  return createMessageController;
};
