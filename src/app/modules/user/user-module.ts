import { prismaClient } from "../../../database/prismaClient";
import { User } from "../../../domain/entities/user";
import { ICreateUser, UserRepository } from "../../repositories/user-repository";

export class UserModule implements UserRepository {
  async create(data: ICreateUser): Promise<User> {
    try {
      return await prismaClient.user.create({ data });
    } catch (err) {
      throw err;
    }
  }
  async findById(id: string): Promise<User | null> {
    try {
      return await prismaClient.user.findFirst({
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
