import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { MessageModule } from "../message-module";
import { GetAllMessagesByChatController } from "./get-all-messages-by-chat-controller";
import { GetAllMessagesByChatUseCase } from "./get-all-messages-by-chat-usecase";

const JEST_ENV = process.env.JEST as string;

export const getAllMessagesByChatFactory = () => {
  const messageRepository = JEST_ENV
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const getAllMessagesByChat = new GetAllMessagesByChatUseCase(
    messageRepository
  );
  const getAllMessagesByChatController = new GetAllMessagesByChatController(
    getAllMessagesByChat
  );
  return getAllMessagesByChatController;
};
