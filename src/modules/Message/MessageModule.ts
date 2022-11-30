import { prismaClient } from "../../database/prismaClient";

export interface CreateChat {
  chatId: string;
  issuer: string;
  text: string;
}

export interface ReadOneChat {
  id: string;
}

export interface ReadAllMessagesByChat {
  chatId: string;
}

export interface ReadLastMessageByChat {
  chatId: string;
}

export class MessageModule {
  create = async (data: CreateChat) => {
    try {
      return await prismaClient.message.create({ data });
    } catch (err) {
      throw err;
    }
  };
  readOne = async ({ id }: ReadOneChat) => {
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
  };
  readAllMessagesByChat = async ({ chatId }: ReadAllMessagesByChat) => {
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
            }
          }
        }
      });
    } catch (err) {
      throw err;
    }
  };
  readLastMessageByChat = async ({ chatId }: ReadLastMessageByChat) => {
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
  };
  deleteAllMessages = async () => {
    try {
      return await prismaClient.message.deleteMany({})
    } catch (err) {
      throw err;
    }
  }
}
