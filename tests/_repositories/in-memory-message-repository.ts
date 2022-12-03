import crypto from "crypto";

import {
  ICreateMessage,
  MessageRepository,
} from "../../src/app/repositories/message-repository";
import { Message } from "../../src/domain/entities/message";
import { fakeDBMessages } from "../_database";

export class InMemoryMessageRepository implements MessageRepository {
  public items = fakeDBMessages;

  async findById(id: string): Promise<Message | null> {
    const response = this.items.find((message) => message.id === id);

    if (!response) {
      return null;
    }

    const { chatId, createdAt, id: messageId, issuer, text } = response;

    const message: Message = {
      id: messageId,
      text,
      issuer,
      chatId,
      createdAt: new Date(createdAt),
    };

    return message;
  }

  async create({ chatId, issuer, text }: ICreateMessage): Promise<Message> {
    const message = Message.create({
      chatId,
      id: crypto.randomUUID(),
      issuer,
      text,
    });

    this.items.push({
      chatId: message.chatId,
      createdAt: JSON.stringify(message.createdAt),
      id: message.id,
      issuer: message.issuer,
      text: message.text,
    });

    return message;
  }

  async findAll(): Promise<Message[] | null> {
    const messages = this.items.map((item) => {
      return {
        ...item,
        createdAt: new Date(item.createdAt),
      };
    });

    return messages;
  }

  async findAllByChat(chatId: string): Promise<Message[] | null> {
    const messagesByChat = this.items.filter(
      (message) => message.chatId === chatId
    );

    const messages = messagesByChat.map((item) => {
      return {
        ...item,
        createdAt: new Date(item.createdAt),
      };
    });

    if (!messagesByChat) {
      return null;
    }

    return messages;
  }

  async findLastByChat(chatId: string): Promise<Message[] | null> {
    const messagesByChat = this.items.filter(
      (message) => message.chatId === chatId
    );

    const getLastMessage = messagesByChat[messagesByChat.length - 1];

    const lastMessage: Message = {
      ...getLastMessage,
      createdAt: new Date(getLastMessage.createdAt),
    };

    return [lastMessage];
  }

  async deleteAll(): Promise<void> {
    this.items = [];
  }
}
