import { ChatModule } from "../chat-module";
import { GetChatUseCase } from "./get-chat-usecase";
import { GetChatController } from "./get-chat-controller";
import { config } from "../../../../config";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getChatFactory = () => {
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const getChat = new GetChatUseCase(chatRepository);
  const getChatController = new GetChatController(getChat);
  return getChatController;
};
