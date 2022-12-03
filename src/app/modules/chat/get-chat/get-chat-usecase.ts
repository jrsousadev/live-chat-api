import { ChatRepository } from "../../../repositories/chat-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";
interface GetChatRequest {
  id: string;
}

export class GetChatUseCase {
  constructor(private chatRepository: ChatRepository) {}

  execute = async ({ id }: GetChatRequest) => {
    try {
      const chat = await this.chatRepository.findById(id);

      if (!chat) throw new AppError("Chat is not exist")

      return chat;
    } catch (err) {
      throw err;
    }
  };
}
