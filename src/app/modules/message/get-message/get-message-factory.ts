import { InMemoryMessageRepository } from "../../../../../tests/_repositories/in-memory-message-repository";
import { MessageRepository } from "../../../repositories/message-repository";
import { MessageModule } from "../message-module";
import { GetMessageController } from "./get-message-controller";
import { GetMessageUseCase } from "./get-message-usecase";

const JEST_ENV = process.env.JEST as string;

export const getMessageFactory = () => {
  const messageRepository = JEST_ENV
    ? new InMemoryMessageRepository()
    : new MessageModule();
  const getMessage = new GetMessageUseCase(messageRepository);
  const getMessageController = new GetMessageController(getMessage);
  return getMessageController;
};
