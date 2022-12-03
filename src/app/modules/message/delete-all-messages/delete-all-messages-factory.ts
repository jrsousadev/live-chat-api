import { MessageRepository } from "../../../repositories/message-repository";
import { MessageModule } from "../message-module";
import { DeleteAllMessagesController } from "./delete-all-messages-controller";
import { DeleteAllMessagesUseCase } from "./delete-all-messages-usecase";

export const deleteAllMessagesFactory = ( InMemoryMessageRepository?: MessageRepository ) => {
    const messageRepository = InMemoryMessageRepository ?? new MessageModule();
    const deleteMessage = new DeleteAllMessagesUseCase(messageRepository);
    const deleteMessageController = new DeleteAllMessagesController(deleteMessage);
    return deleteMessageController;
}