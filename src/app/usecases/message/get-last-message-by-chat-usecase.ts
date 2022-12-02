import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";
import { AppError } from "../../shared/errors/AppError";
import { validObjectId } from "../../utils/validObjectId";

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
      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      return await this.messageRepository.findLastByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
