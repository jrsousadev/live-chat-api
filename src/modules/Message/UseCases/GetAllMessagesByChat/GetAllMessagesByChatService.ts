import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

interface GetAllMessagesByChatRequest {
  chatId: string;
}

@injectable()
export class GetAllMessagesByChatService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async ({ chatId }: GetAllMessagesByChatRequest) => {
    try {
      return await this.messageModule.readAllMessagesByChat({ chatId });
    } catch (err) {
      throw err;
    }
  };
}
