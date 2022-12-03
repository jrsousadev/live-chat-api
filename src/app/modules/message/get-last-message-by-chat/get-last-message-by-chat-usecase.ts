import { ChatRepository } from "../../../repositories/chat-repository";
import { MessageRepository } from "../../../repositories/message-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

interface GetLastMessagesByChatRequest {
  chatId: string;
}

export class GetLastMessageByChatUseCase {
  constructor(
    private chatRepository: ChatRepository,
    private messageRepository: MessageRepository
  ) {}

  execute = async ({ chatId }: GetLastMessagesByChatRequest) => {
    try {
      if (!validObjectId(chatId)) throw new AppError("Invalid id", 400);

      const chat = await this.chatRepository.findById(chatId);

      if (!chat) throw new AppError("Chat is not exist");

      return await this.messageRepository.findLastByChat(chatId);
    } catch (err) {
      throw err;
    }
  };
}
