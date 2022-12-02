import { inject, injectable } from "tsyringe";
import { ChatRepository } from "../../repositories/chat-repository";

interface CreateChatRequest {
  userOne: string;
  userTwo: string;
}

@injectable()
export class CreateChatUseCase {
  constructor(
    @inject("ChatModule")
    private chatRepository: ChatRepository
  ) {}

  execute = async ({ userOne, userTwo }: CreateChatRequest) => {
    try {
      return await this.chatRepository.create({
        userOne,
        userTwo,
      });
    } catch (err) {
      throw err;
    }
  };
}
