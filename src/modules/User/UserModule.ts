import { prismaClient } from "../../database/prismaClient";

export interface CreateUser {
  name: string;
  image: string;
}

export interface ReadOneUser {
  id: string;
}

export class UserModule {
  create = async (data: CreateUser) => {
    try {
      return await prismaClient.user.create({ data });
    } catch (err) {
      throw err;
    }
  };
  readOne = async ({ id }: ReadOneUser) => {
    try {
      return await prismaClient.user.findFirst({
        where: {
            id
        }
      })
    } catch (err) {
      throw err;
    }
  };
}
