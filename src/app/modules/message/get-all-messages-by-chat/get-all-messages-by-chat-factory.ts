import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { MessageModule } from "../message-module";
import { GetAllMessagesByChatController } from "./get-all-messages-by-chat-controller";
import { GetAllMessagesByChatUseCase } from "./get-all-messages-by-chat-usecase";
import { config } from "../../../../config";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { ChatModule } from "../../chat/chat-module";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getAllMessagesByChatFactory = () => {
  const messageRepository = TEST_ENVIRONMENT
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const getAllMessagesByChat = new GetAllMessagesByChatUseCase(
    chatRepository,
    messageRepository,
  );
  const getAllMessagesByChatController = new GetAllMessagesByChatController(
    getAllMessagesByChat
  );
  return getAllMessagesByChatController;
};
