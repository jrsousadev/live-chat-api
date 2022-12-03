import { ChatRepository } from "../../../repositories/chat-repository";
import { MessageRepository } from "../../../repositories/message-repository";
import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";
interface CreateMessageRequest {
  chatId: string;
  issuer: string;
  text: string;
}

export class CreateMessageUseCase {
  constructor(
    private messageRepository: MessageRepository,
    private userRepository: UserRepository,
    private chatRepository: ChatRepository,
  ) {}

  execute = async (data: CreateMessageRequest) => {
    try {
      if (data.text.length === 0) throw new AppError("Invalid message");

      const chat = await this.chatRepository.findById(data.chatId);
      if (!chat) throw new AppError("Chat is not exists.");

      const user = await this.userRepository.findById(data.issuer);
      if (!user) throw new AppError("Issuer is not exists.");

      return await this.messageRepository.create(data);
    } catch (err) {
      throw err;
    }
  };
}
