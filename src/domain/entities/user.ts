type UserProps = {
  id: string;
  name: string;
  image: string;
};

export class User implements UserProps {
  public id: string;
  public name: string;
  public image: string;

  constructor({ id, name, image }: UserProps) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  static create(props: UserProps) {
    const message = new User(props);

    return message;
  }
}
