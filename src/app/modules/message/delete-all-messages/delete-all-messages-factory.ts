import { MessageModule } from "../message-module";
import { DeleteAllMessagesController } from "./delete-all-messages-controller";
import { DeleteAllMessagesUseCase } from "./delete-all-messages-usecase";
import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { config } from "../../../../config";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const deleteAllMessagesFactory = () => {
  const messageRepository = TEST_ENVIRONMENT
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const deleteMessage = new DeleteAllMessagesUseCase(messageRepository);
  const deleteMessageController = new DeleteAllMessagesController(
    deleteMessage
  );
  return deleteMessageController;
};
