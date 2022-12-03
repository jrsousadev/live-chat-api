import { ChatRepository } from "../../../repositories/chat-repository";
import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";

interface CreateGroupChatRequest {
  users: string[];
  groupName: string;
  groupImage: string;
}

export class CreateGroupChatUseCase {
  constructor(
    private chatRepository: ChatRepository,
    private userRepository: UserRepository
  ) {}

  execute = async ({
    users,
    groupName,
    groupImage,
  }: CreateGroupChatRequest) => {
    try {
      for (let id of users) {
        const user = await this.userRepository.findById(id);
        if (!user) throw new AppError("One of the users does not exist");
      }

      if (groupImage === "") {
        throw new AppError("The groupImage property is required")
      }

      if (groupName === "") {
        throw new AppError("The groupName property is required")
      }

      return await this.chatRepository.createGroup({
        users,
        groupName,
        groupImage,
      });
    } catch (err) {
      throw err;
    }
  };
}
