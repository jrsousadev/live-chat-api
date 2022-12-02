import { inject, injectable } from "tsyringe";
import { MessageRepository } from "../../repositories/message-repository";
import { AppError } from "../../shared/errors/AppError";
import { validObjectId } from "../../utils/validObjectId";

interface GetAllMessagesByChatRequest {
  chatId: string;
}

@injectable()
export class GetAllMessagesByChatUseCase {
  constructor(
    @inject("MessageModule")
    private messageRepository: MessageRepository
  ) {}

  execute = async ({ chatId }: GetAllMessagesByChatRequest) => {
    try {
      if (!validObjectId(chatId)) throw new AppError("id invalid", 400);

      return await this.messageRepository.findAllByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
