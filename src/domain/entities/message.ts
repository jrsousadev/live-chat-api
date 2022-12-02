type MessageProps = {
  id: string;
  chatId: string;
  issuer: string;
  text: string;
};

export class Message implements MessageProps {
  public id: string;
  public chatId: string;
  public issuer: string;
  public text: string;
  public createdAt: Date;

  constructor({ chatId, id, issuer, text }: MessageProps) {
    this.id = id,
    this.chatId = chatId,
    this.issuer = issuer,
    this.text = text,
    this.createdAt = new Date();
  }

  static create(props: MessageProps) {
    const message = new Message(props);

    return message;
  }
}
