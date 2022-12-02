import { inject, injectable } from "tsyringe";
import { ChatRepository } from "../../repositories/chat-repository";

interface GetChatRequest {
  id: string;
}

@injectable()
export class GetChatUseCase {
  constructor(
    @inject("ChatModule")
    private chatRepository: ChatRepository
  ) {}

  execute = async ({ id }: GetChatRequest) => {
    try {
      return await this.chatRepository.findById(id);
    } catch (err) {
      throw err;
    }
  };
}
