import { ChatModule } from "../chat-module";
import { ChatRepository } from "../../../repositories/chat-repository";
import { CreateGroupChatController } from "../create-group-chat/create-group-chat-controller";
import { CreateGroupChatUseCase } from "../create-group-chat/create-group-chat-usecase";

export const getAllChatsByUserFactory = (
  InMemoryChatRepository?: ChatRepository
) => {
  const chatRepository = InMemoryChatRepository ?? new ChatModule();
  const getAllChatsByUser = new CreateGroupChatUseCase(chatRepository);
  const getAllChatsByUserController = new CreateGroupChatController(
    getAllChatsByUser
  );
  return getAllChatsByUserController;
};
