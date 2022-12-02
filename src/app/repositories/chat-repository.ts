import { Chat } from "../../domain/entities/chat";

export interface ICreateChat {
  userOne: string;
  userTwo: string;
}

export interface ICreateGroupChat {
  groupImage: string;
  groupName: string;
  users: string[];
}

export interface ChatRepository {
  findById(id: string): Promise<Chat | null>;
  create(data: ICreateChat): Promise<Chat>;
  createGroup(data: ICreateGroupChat): Promise<Chat>;
  findAllByUser(userId: string): Promise<Chat[] | null>;
}
