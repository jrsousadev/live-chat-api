import crypto from "crypto";
import {
  ICreateUser,
  UserRepository,
} from "../../src/app/repositories/user-repository";
import { User } from "../../src/domain/entities/user";
import { fakeDBUsers } from "../_database";

export class InMemoryUserRepository implements UserRepository {
  public items = fakeDBUsers;

  async create({ image, name }: ICreateUser): Promise<User> {
    const user = User.create({
      id: crypto.randomUUID(),
      name,
      image,
    });

    this.items.push({
      id: user.id,
      image: user.image,
      name: user.name,
    });

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.items.filter((user) => user.id === id)[0];

    if (!user) {
      return null;
    }

    return user;
  }
}
