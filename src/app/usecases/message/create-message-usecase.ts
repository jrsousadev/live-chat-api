import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";

interface CreateMessageRequest {
  chatId: string;
  issuer: string;
  text: string;
}

@injectable()
export class CreateMessageUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository
  ) {}

  execute = async (data: CreateMessageRequest) => {
    try {
      return await this.messageRepository.create(data);
    } catch (err) {
      throw err;
    }
  };
}
