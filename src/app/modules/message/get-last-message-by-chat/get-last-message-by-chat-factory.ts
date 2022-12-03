import { MessageRepository } from "../../../repositories/message-repository";
import { MessageModule } from "../message-module";
import { GetLastMessageByChatController } from "./get-last-message-by-chat-controller";
import { GetLastMessageByChatUseCase } from "./get-last-message-by-chat-usecase";

export const getLastMessageByChatFactory = (
  InMemoryMessageRepository?: MessageRepository
) => {
  const messageRepository = InMemoryMessageRepository ?? new MessageModule();
  const getLastMessageByChat = new GetLastMessageByChatUseCase(
    messageRepository
  );
  const getLastMessageByChatController = new GetLastMessageByChatController(
    getLastMessageByChat
  );
  return getLastMessageByChatController;
};
