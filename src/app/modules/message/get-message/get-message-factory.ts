import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { MessageModule } from "../message-module";
import { GetMessageController } from "./get-message-controller";
import { GetMessageUseCase } from "./get-message-usecase";
import { config } from "../../../../config";

const TEST_ENVIRONMENT = config.ENVIRONMENT === "TEST" ? true : false;

export const getMessageFactory = () => {
  const messageRepository = TEST_ENVIRONMENT
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const getMessage = new GetMessageUseCase(messageRepository);
  const getMessageController = new GetMessageController(getMessage);
  return getMessageController;
};
