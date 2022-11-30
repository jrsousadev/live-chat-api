import { inject, injectable } from "tsyringe";
import { ChatModule } from "../../ChatModule";

interface GetChatRequest {
  id: string;
}

@injectable()
export class GetChatService {
  constructor(
    @inject("ChatModule")
    private chatModule: ChatModule
  ) {}

  execute = async ({ id }: GetChatRequest) => {
    try {
      return await this.chatModule.readOne({
        id,
      });
    } catch (err) {
      throw err;
    }
  };
}
