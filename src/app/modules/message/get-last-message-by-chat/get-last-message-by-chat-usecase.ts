import { MessageRepository } from "../../../repositories/message-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

interface GetLastMessagesByChatRequest {
  chatId: string;
}

export class GetLastMessageByChatUseCase {
  constructor(private messageRepository: MessageRepository) {}

  execute = async ({ chatId }: GetLastMessagesByChatRequest) => {
    try {
      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      return await this.messageRepository.findLastByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
