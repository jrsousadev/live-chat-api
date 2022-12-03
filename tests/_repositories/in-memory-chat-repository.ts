import crypto from "crypto";
import {
  ChatRepository,
  ICreateChat,
  ICreateGroupChat,
} from "../../src/app/repositories/chat-repository";
import { Chat } from "../../src/domain/entities/chat";
import { GroupChat } from "../../src/domain/entities/group-chat";

import { fakeDBChat } from "../_database";

export class InMemoryChatRepository implements ChatRepository {
  public items = fakeDBChat;

  async findById(id: string): Promise<Chat | null> {
    const response = this.items.find((chat) => chat.id === id);

    if (!response) {
      return null;
    }

    const { createdAt, users } = response;

    const chat: Chat = {
      id,
      users,
      createdAt: new Date(createdAt),
    };

    return chat;
  }

  async create({ userOne, userTwo }: ICreateChat): Promise<Chat> {
    const chat = Chat.create({
      id: crypto.randomUUID(),
      users: [userOne, userTwo],
    });

    this.items.push({
      createdAt: JSON.stringify(chat.createdAt),
      id: chat.id,
      users: chat.users,
    });

    return chat;
  }

  async createGroup({
    groupImage,
    groupName,
    users,
  }: ICreateGroupChat): Promise<GroupChat> {
    const groupChat = GroupChat.create({
      id: crypto.randomUUID(),
      users,
      groupImage,
      groupName,
      isGroup: true,
    });

    this.items.push({
      createdAt: JSON.stringify(groupChat.createdAt),
      id: groupChat.id,
      users: groupChat.users,
    });

    return groupChat;
  }

  async findAllByUser(userId: string): Promise<Chat[] | null> {
    let chats: Chat[] = [];

    this.items.forEach((item) => {
      item.users.some((user) => {
        if (user === userId) {
          const chat: Chat = {
            id: item.id,
            users: item.users,
            createdAt: new Date(item.createdAt),
          };
          chats.push(chat);
        }
      });
    });

    return chats;
  }
}
