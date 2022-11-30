import { prismaClient } from "../../database/prismaClient";

export interface CreateChat {
  userOne: string;
  userTwo: string;
}

export interface CreateGroupChat {
  users: string[];
  groupName: string;
  groupImage: string;
}

export interface ReadOneChat {
  id: string;
}

export interface ReadAllChatByUser {
  userId: string;
}

export class ChatModule {
  create = async ({ userOne, userTwo }: CreateChat) => {
    try {
      return await prismaClient.chat.create({
        data: {
          users: [userOne, userTwo],
        },
      });
    } catch (err) {
      throw err;
    }
  };
  readOne = async ({ id }: ReadOneChat) => {
    try {
      return await prismaClient.chat.findFirst({
        where: {
          id,
        },
        include: {
          User: {
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
  readAllByUser = async ({ userId }: ReadAllChatByUser) => {
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
  };
  createGroup = async ({ users, groupName, groupImage }: CreateGroupChat) => {
    try {
      return await prismaClient.chat.create({
        data: {
          users,
          groupName,
          isGroup: true,
          groupImage,
        }
      });
    } catch (err) {
      throw err;
    }
  }
}
