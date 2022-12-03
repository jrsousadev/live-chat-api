import { ChatRepository } from "../../../repositories/chat-repository";

interface CreateChatRequest {
  userOne: string;
  userTwo: string;
}

export class CreateChatUseCase {
  constructor(private chatRepository: ChatRepository) {}

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
