import { Chat } from "./chat";

type GroupChatProps = {
  id: string;
  isGroup: boolean | null;
  groupName: string | null;
  groupImage: string | null;
  users: string[];
};

export class GroupChat extends Chat {
  constructor({ users, id }: GroupChatProps) {
    super({ users, id });
  }

  static create(props: GroupChatProps) {
    const chat = new Chat(props);

    return chat;
  }
}
