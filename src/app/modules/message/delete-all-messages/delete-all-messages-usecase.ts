import { MessageRepository } from "../../../repositories/message-repository";

export class DeleteAllMessagesUseCase {
  constructor(private messageRepository: MessageRepository) {}

  execute = async () => {
    try {
      return await this.messageRepository.deleteAll();
    } catch (err) {
      throw err;
    }
  };
}
