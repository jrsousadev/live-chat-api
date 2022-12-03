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
      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      return await this.chatRepository.findById(id);
    } catch (err) {
      throw err;
    }
  };
}