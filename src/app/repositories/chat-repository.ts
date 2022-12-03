import { Chat } from "../../domain/entities/chat";
import { GroupChat } from "../../domain/entities/group-chat";

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
  createGroup(data: ICreateGroupChat): Promise<GroupChat>;
  findAllByUser(userId: string): Promise<Chat[] | null>;
}
