import { inject, injectable } from "tsyringe";
import { ChatRepository } from "../../repositories/chat-repository";

interface CreateGroupChatRequest {
  users: string[];
  groupName: string;
  groupImage: string;
}

@injectable()
export class CreateGroupChatUseCase {
  constructor(
    @inject("ChatModule")
    private chatRepository: ChatRepository
  ) {}

  execute = async ({ users, groupName, groupImage }: CreateGroupChatRequest) => {
    try {
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
