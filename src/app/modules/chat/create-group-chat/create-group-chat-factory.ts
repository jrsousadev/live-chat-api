import { ChatModule } from "../chat-module";
import { ChatRepository } from "../../../repositories/chat-repository";
import { CreateGroupChatUseCase } from "./create-group-chat-usecase";
import { CreateGroupChatController } from "./create-group-chat-controller";

export const createGroupChatFactory = (
  InMemoryChatRepository?: ChatRepository
) => {
  const chatRepository = InMemoryChatRepository ?? new ChatModule();
  const createGroupChat = new CreateGroupChatUseCase(chatRepository);
  const createGroupChatController = new CreateGroupChatController(
    createGroupChat
  );
  return createGroupChatController;
};
