import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";

type getMessageRequest = {
  id: string;
};

@injectable()
export class GetMessageUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository,
  ) {}

  async execute({ id }: getMessageRequest) {
    const message = await this.messageRepository.findById(id);

    if (!message) {
      throw new Error("Message does not exists.");
    }
    
    return message;
  }
}
