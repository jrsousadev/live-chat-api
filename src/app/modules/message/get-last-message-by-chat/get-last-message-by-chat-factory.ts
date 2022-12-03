import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { MessageModule } from "../message-module";
import { GetLastMessageByChatController } from "./get-last-message-by-chat-controller";
import { GetLastMessageByChatUseCase } from "./get-last-message-by-chat-usecase";
import { config } from "../../../../config";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { ChatModule } from "../../chat/chat-module";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getLastMessageByChatFactory = () => {
  const messageRepository = TEST_ENVIRONMENT
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const getLastMessageByChat = new GetLastMessageByChatUseCase(
    chatRepository,
    messageRepository
  );
  const getLastMessageByChatController = new GetLastMessageByChatController(
    getLastMessageByChat
  );
  return getLastMessageByChatController;
};
