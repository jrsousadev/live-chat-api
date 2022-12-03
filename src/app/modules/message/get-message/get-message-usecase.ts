import { MessageRepository } from "../../../repositories/message-repository";
import { AppError } from "../../../shared/errors/AppError";
import { validObjectId } from "../../../utils/validObjectId";

type getMessageRequest = {
  id: string;
};

export class GetMessageUseCase {
  constructor(private messageRepository: MessageRepository) {}

  async execute({ id }: getMessageRequest) {
    try {
      if (!validObjectId(id)) throw new AppError("id invalid", 400);

      const message = await this.messageRepository.findById(id);

      if (!message) {
        throw new AppError("Message does not exists.");
      }

      return message;
    } catch (err) {
      throw err;
    }
  }
}
