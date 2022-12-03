import { prismaClient } from "../../../database/prismaClient";
import { Message } from "../../../domain/entities/message";
import {
  ICreateMessage,
  MessageRepository,
} from "../../repositories/message-repository";

export class MessageModule implements MessageRepository {
  async findById(id: string): Promise<Message | null> {
    try {
      return await prismaClient.message.findFirst({
        where: {
          id,
        },
        include: {
          user: {
            select: {
              name: true,
            }
          }
        }
      });
    } catch (err) {
      throw err;
    }
  }
  async create(data: ICreateMessage): Promise<Message> {
    try {
      return await prismaClient.message.create({ data });
    } catch (err) {
      throw err;
    }
  }
  async findAll(): Promise<Message[] | null> {
    try {
      return await prismaClient.message.findMany();
    } catch (err) {
      throw err;
    }
  }
  async findAllByChat(chatId: string): Promise<Message[] | null> {
    try {
      return await prismaClient.message.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          chatId,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (err) {
      throw err;
    }
  }
  async deleteAll(): Promise<void> {
    try {
      await prismaClient.message.deleteMany()
    } catch (err) {
      throw err;
    }
  }
  async findLastByChat(chatId: string): Promise<Message[] | null> {
    try {
      return await prismaClient.message.findMany({
        where: {
          chatId,
        },
        include: {
          user: {
            select: {
              name: true
            }
          }
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      });
    } catch (err) {
      throw err;
    }
  }
}
