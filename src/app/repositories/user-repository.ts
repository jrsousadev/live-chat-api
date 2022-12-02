import { User } from "../../domain/entities/user";

export interface ICreateUser {
  name: string;
  image: string;
}

export interface UserRepository {
  create(data: ICreateUser): Promise<User>;
  findById(id: string): Promise<User | null>;
}
