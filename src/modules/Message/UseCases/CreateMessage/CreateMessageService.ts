import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

interface CreateMessageRequest {
  chatId: string;
  recipient: string;
  issuer: string;
  text: string;
}

@injectable()
export class CreateMessageService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async ({ chatId, issuer, recipient, text }: CreateMessageRequest) => {
    try {
      return await this.messageModule.create({
        chatId,
        recipient,
        issuer,
        text
      });
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      }
    }
  };
}
