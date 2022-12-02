import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";

interface GetAllMessagesByChatRequest {
  chatId: string;
}

@injectable()
export class GetAllMessagesByChatUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository,
  ) {}

  execute = async ({ chatId }: GetAllMessagesByChatRequest) => {
    try {
      return await this.messageRepository.findAllByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
