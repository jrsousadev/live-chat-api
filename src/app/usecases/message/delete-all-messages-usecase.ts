import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";

@injectable()
export class DeleteAllMessagesUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository
  ) {}

  execute = async () => {
    try {
      return await this.messageRepository.deleteAll();
    } catch (err) {
      throw err;
    }
  };
}
