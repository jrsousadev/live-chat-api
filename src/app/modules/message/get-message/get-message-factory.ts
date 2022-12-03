import { MessageRepository } from "../../../repositories/message-repository";
import { MessageModule } from "../message-module";
import { GetMessageController } from "./get-message-controller";
import { GetMessageUseCase } from "./get-message-usecase";

export const getMessageFactory = (
  InMemoryMessageRepository?: MessageRepository
) => {
  const messageRepository = InMemoryMessageRepository ?? new MessageModule();
  const getMessage = new GetMessageUseCase(
    messageRepository
  );
  const getMessageController = new GetMessageController(
    getMessage
  );
  return getMessageController;
};
