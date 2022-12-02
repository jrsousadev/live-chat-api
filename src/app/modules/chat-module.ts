import { prismaClient } from "../../database/prismaClient";
import { Chat } from "../../domain/entities/chat";
import {
  ChatRepository,
  ICreateChat,
  ICreateGroupChat,
} from "../repositories/chat-repository";

export class ChatModule implements ChatRepository {
  async findById(id: string): Promise<Chat | null> {
    try {
      return await prismaClient.chat.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async create({ userOne, userTwo }: ICreateChat): Promise<Chat> {
    try {
      return await prismaClient.chat.create({
        data: {
          users: [userOne, userTwo],
          isGroup: false,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async createGroup({
    groupImage,
    groupName,
    users,
  }: ICreateGroupChat): Promise<Chat> {
    try {
      return await prismaClient.chat.create({
        data: {
          users,
          groupName,
          isGroup: true,
          groupImage,
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async findAllByUser(userId: string): Promise<Chat[] | null> {
    try {
      return await prismaClient.chat.findMany({
        where: {
          OR: [
            {
              users: {
                hasSome: userId,
              },
            },
          ],
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
