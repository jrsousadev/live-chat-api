import { MessageRepository } from "../../../repositories/message-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

interface GetAllMessagesByChatRequest {
  chatId: string;
}

export class GetAllMessagesByChatUseCase {
  constructor(private messageRepository: MessageRepository) {}

  execute = async ({ chatId }: GetAllMessagesByChatRequest) => {
    try {
      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      return await this.messageRepository.findAllByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
