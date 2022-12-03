type ChatProps = {
  id: string;
  users: string[];
};

export class Chat implements ChatProps {
  public id: string;
  public users: string[];
  public createdAt: Date;

  constructor({ id, users }: ChatProps) {
    this.id = id;
    this.users = users;
    this.createdAt = new Date();
  }

  static create(props: ChatProps) {
    const chat = new Chat(props);

    return chat;
  }
}
