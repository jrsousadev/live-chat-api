import { inject, injectable } from "tsyringe";
import { ChatModule } from "../../ChatModule";

interface CreateGroupChatRequest {
  users: string[];
  groupName: string;
  groupImage: string;
}

@injectable()
export class CreateGroupChatService {
  constructor(
    @inject("ChatModule")
    private chatModule: ChatModule
  ) {}

  execute = async ({ users, groupName, groupImage }: CreateGroupChatRequest) => {
    try {
      return await this.chatModule.createGroup({
        users,
        groupName,
        groupImage,
      });
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      }
    }
  };
}
