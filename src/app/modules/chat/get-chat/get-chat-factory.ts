import { ChatModule } from "../chat-module";
import { ChatRepository } from "../../../repositories/chat-repository";
import { GetChatUseCase } from "./get-chat-usecase";
import { GetChatController } from "./get-chat-controller";

export const getChatFactory = (
  InMemoryChatRepository?: ChatRepository
) => {
  const chatRepository = InMemoryChatRepository ?? new ChatModule();
  const getChat = new GetChatUseCase(chatRepository);
  const getChatController = new GetChatController(
    getChat
  );
  return getChatController;
};
