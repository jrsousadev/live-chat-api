import { Message } from "../../domain/entities/message";

export interface ICreateMessage {
  chatId: string;
  issuer: string;
  text: string;
}

export interface MessageRepository {
  findById(id: string): Promise<Message | null>;
  create(data: ICreateMessage): Promise<Message>;
  findAll(): Promise<Message[] | null>;
  findAllByChat(chatId: string): Promise<Message[]| null>;
  findLastByChat(chatId: string): Promise<Message[] | null>;
  deleteAll(): Promise<void>;
}
