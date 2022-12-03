import { ChatRepository } from "../../../repositories/chat-repository";
import { UserRepository } from "../../../repositories/user-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

interface GetAllChatsByUserRequest {
  userId: string;
}

export class GetAllChatsByUserUseCase {
  constructor(
    private chatRepository: ChatRepository,
    private userRepository: UserRepository
  ) {}

  execute = async ({ userId }: GetAllChatsByUserRequest) => {
    try {
      if (!validObjectId(userId)) throw new AppError("id invalid", 400);

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
