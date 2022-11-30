import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

interface CreateMessageRequest {
  chatId: string;
  issuer: string;
  text: string;
}

@injectable()
export class CreateMessageService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async ({ chatId, issuer, text }: CreateMessageRequest) => {
    try {
      return await this.messageModule.create({
        chatId,
        issuer,
        text
      });
    } catch (err) {
      throw err;
    }
  };
}
