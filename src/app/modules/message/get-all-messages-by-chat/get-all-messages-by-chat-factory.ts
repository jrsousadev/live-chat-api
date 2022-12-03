import { MessageRepository } from "../../../repositories/message-repository";
import { MessageModule } from "../message-module";
import { GetAllMessagesByChatController } from "./get-all-messages-by-chat-controller";
import { GetAllMessagesByChatUseCase } from "./get-all-messages-by-chat-usecase";

export const getAllMessagesByChatFactory = (
  InMemoryMessageRepository?: MessageRepository
) => {
  const messageRepository = InMemoryMessageRepository ?? new MessageModule();
  const getAllMessagesByChat = new GetAllMessagesByChatUseCase(
    messageRepository
  );
  const getAllMessagesByChatController = new GetAllMessagesByChatController(
    getAllMessagesByChat
  );
  return getAllMessagesByChatController;
};
