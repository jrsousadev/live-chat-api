import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

interface GetLastMessagesByChatRequest {
  chatId: string;
}

@injectable()
export class GetLastMessageByChatService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async ({ chatId }: GetLastMessagesByChatRequest) => {
    try {
      return await this.messageModule.readLastMessageByChat({ chatId });
    } catch (err) {
      throw err;
    }
  };
}
