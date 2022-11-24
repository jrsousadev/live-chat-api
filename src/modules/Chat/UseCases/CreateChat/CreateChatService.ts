import { inject, injectable } from "tsyringe";
import { ChatModule } from "../../ChatModule";

interface CreateChatRequest {
  userOne: string;
  userTwo: string;
}

@injectable()
export class CreateChatService {
  constructor(
    @inject("ChatModule")
    private chatModule: ChatModule
  ) {}

  execute = async ({ userOne, userTwo }: CreateChatRequest) => {
    try {
      return await this.chatModule.create({
        userOne,
        userTwo,
      });
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      }
    }
  };
}
