import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";

interface GetLastMessagesByChatRequest {
  chatId: string;
}

@injectable()
export class GetLastMessageByChatUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository
  ) {}

  execute = async ({ chatId }: GetLastMessagesByChatRequest) => {
    try {
      return await this.messageRepository.findLastByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
