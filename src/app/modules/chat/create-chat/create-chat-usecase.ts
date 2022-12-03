import { ChatRepository } from "../../../repositories/chat-repository";
import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";

interface CreateChatRequest {
  userOne: string;
  userTwo: string;
}

export class CreateChatUseCase {
  constructor(
    private chatRepository: ChatRepository,
    private userRepository: UserRepository,
  ) {}

  execute = async ({ userOne, userTwo }: CreateChatRequest) => {
    try {
      const getUserOne = await this.userRepository.findById(userOne);
      const getUserTwo = await this.userRepository.findById(userTwo);

      if (!getUserOne || !getUserTwo) throw new AppError("One of the users does not exist");

      return await this.chatRepository.create({
        userOne,
        userTwo,
      });
    } catch (err) {
      throw err;
    }
  };
}
