import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

@injectable()
export class DeleteAllMessagesService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async () => {
    try {
      return await this.messageModule.deleteAllMessages();
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      }
    }
  };
}
