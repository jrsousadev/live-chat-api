import { ChatRepository } from "../../../repositories/chat-repository";

interface CreateGroupChatRequest {
  users: string[];
  groupName: string;
  groupImage: string;
}

export class CreateGroupChatUseCase {
  constructor(private chatRepository: ChatRepository) {}

  execute = async ({
    users,
    groupName,
    groupImage,
  }: CreateGroupChatRequest) => {
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
