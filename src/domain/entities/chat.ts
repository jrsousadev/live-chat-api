type ChatProps = {
  id: string;
  isGroup: boolean | null;
  groupName: string | null; 
  groupImage: string | null; 
  users: string[];
};

export class Chat implements ChatProps {
  public id: string;
  public isGroup: boolean | null;
  public groupName: string | null;
  public groupImage: string | null;
  public users: string[];
  public createdAt: Date;

  constructor({ id, users, isGroup, groupName, groupImage }: ChatProps) {
    this.id = id;
    this.users = users;
    this.isGroup = isGroup ?? false;
    this.groupName = groupName ?? "";
    this.groupImage = groupImage ?? "";
    this.createdAt = new Date();
  }

  static create(props: ChatProps) {
    const chat = new Chat(props);

    return chat;
  }
}
