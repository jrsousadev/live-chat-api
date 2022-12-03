import { CreateChatController } from "./create-chat-controller";
import { ChatModule } from "../chat-module";
import { CreateChatUseCase } from "./create-chat-usecase"
import { ChatRepository } from "../../../repositories/chat-repository";

export const createChatFactory = (InMemoryChatRepository?: ChatRepository) => {
    const chatRepository = InMemoryChatRepository ?? new ChatModule();
    const createChat = new CreateChatUseCase(chatRepository);
    const createChatController = new CreateChatController(createChat);
    return createChatController;
}