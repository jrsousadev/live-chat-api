import { ChatRepository } from "../../../repositories/chat-repository";
import { MessageRepository } from "../../../repositories/message-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";
interface GetAllMessagesByChatRequest {
  chatId: string;
}

export class GetAllMessagesByChatUseCase {
  constructor(
    private chatRepository: ChatRepository,
    private messageRepository: MessageRepository
  ) {}

  execute = async ({ chatId }: GetAllMessagesByChatRequest) => {
    try {
      if (!validObjectId(chatId)) throw new AppError("Invalid Chat ID", 400);

      const chat = await this.chatRepository.findById(chatId);

      if (!chat) throw new AppError("Chat is not exist")

      return await this.messageRepository.findAllByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
