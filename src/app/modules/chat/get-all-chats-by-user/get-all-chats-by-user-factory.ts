import { ChatModule } from "../chat-module";
import { CreateGroupChatController } from "../create-group-chat/create-group-chat-controller";
import { CreateGroupChatUseCase } from "../create-group-chat/create-group-chat-usecase";
import { config } from "../../../../config";
import { InMemoryChatRepository } from "../../../../../tests/_repositories/in-memory-chat-repository";
import { InMemoryUserRepository } from "../../../../../tests/_repositories/in-memory-user-repository";
import { UserModule } from "../../user/user-module";
import { GetAllChatsByUserUseCase } from "./get-all-chats-by-user-usecase";
import { GetAllChatsByUserController } from "./get-all-chats-by-user-controller";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getAllChatsByUserFactory = () => {
  const chatRepository = TEST_ENVIRONMENT
    ? new InMemoryChatRepository()
    : new ChatModule();
  const userRepository = TEST_ENVIRONMENT
    ? new InMemoryUserRepository()
    : new UserModule();
  const getAllChatsByUser = new GetAllChatsByUserUseCase(
    chatRepository,
    userRepository
  );
  const getAllChatsByUserController = new GetAllChatsByUserController(
    getAllChatsByUser
  );
  return getAllChatsByUserController;
};
