import { inject, injectable } from "tsyringe";
import { MessageModule } from "../../MessageModule";

interface GetMessageRequest {
  id: string;
}

@injectable()
export class GetMessageService {
  constructor(
    @inject("MessageModule")
    private messageModule: MessageModule
  ) {}

  execute = async ({ id }: GetMessageRequest) => {
    try {
      return await this.messageModule.readOne({
        id,
      });
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      };
    }
  };
}
