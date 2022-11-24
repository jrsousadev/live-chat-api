import { inject, injectable } from "tsyringe";
import { UserModule } from "../../../User/UserModule";
import { ChatModule } from "../../ChatModule";

interface GetAllChatsByUserRequest {
  userId: string;
}

@injectable()
export class GetAllChatsByUserService {
  constructor(
    @inject("ChatModule")
    private chatModule: ChatModule,

    @inject("UserModule")
    private userModule: UserModule
  ) {}

  execute = async ({ userId }: GetAllChatsByUserRequest) => {
    try {
      const chats: any = await this.chatModule.readAllByUser({
        userId,
      });

      for (let index of chats) {
        index.users = await Promise.all(
          index.users.map(async (id: any) => {
            if (userId === id) {
              return {
                id,
              };
            } else {
              const userInformation = await this.userModule.readOne({ id });
              return {
                id,
                name: userInformation?.name,
                image: userInformation?.image,
              };
            }
          })
        );
      }

      return chats;
    } catch (err) {
      return {
        message: "Error",
        statusCode: 400,
      };
    }
  };
}
