import { inject, injectable } from "tsyringe";
import { ChatRepository } from "../../repositories/chat-repository";
import { UserRepository } from "../../repositories/user-repository";

interface GetAllChatsByUserRequest {
  userId: string;
}

@injectable()
export class GetAllChatsByUserUseCase {
  constructor(
    @inject("ChatModule")
    private chatRepository: ChatRepository,

    @inject("UserModule")
    private userRepository: UserRepository
  ) {}

  execute = async ({ userId }: GetAllChatsByUserRequest) => {
    try {
      const chats: any = await this.chatRepository.findAllByUser(userId);

      for (let index of chats) {
        index.users = await Promise.all(
          index.users.map(async (id: any) => {
            if (userId === id) {
              return {
                id,
              };
            } else {
              const userInformation = await this.userRepository.findById(id);
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
      throw err;
    }
  };
}
