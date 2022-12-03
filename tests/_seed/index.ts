import { faker } from "@faker-js/faker/locale/pt_BR";
import { join } from "path";
import { writeFile } from "fs/promises";

import { Chat } from "../../src/domain/entities/chat";
import { Message } from "../../src/domain/entities/message";
import { User } from "../../src/domain/entities/user";
import { GroupChat } from "../../src/domain/entities/group-chat";

const seederBaseFolder = join(__dirname, "../", "_database");

const chats: Chat[] = [];
const messages: Message[] = [];
const users: User[] = [];

const CHAT_AMOUNT = 3;
const USERS_AMOUNT = 6;
const MESSAGES_AMOUNT = 4;

for (let index = 0; index < USERS_AMOUNT; index++) {
  const user = User.create({
    id: faker.database.mongodbObjectId(),
    name: faker.name.fullName(),
    image: faker.image.avatar(),
  });

  users.push(user);
}

for (let index = 0; index < CHAT_AMOUNT; index++) {
  let idOne = index;
  let idTwo = index + 1;

  const chat = Chat.create({
    id: faker.database.mongodbObjectId(),
    users: [users[idOne].id, users[idTwo].id],
  });

  chats.push(chat);
}

const groupChat = GroupChat.create({
  id: faker.database.mongodbObjectId(),
  isGroup: true,
  users: [users[0].id, users[1].id, users[2].id, users[3].id],
  groupName: faker.name.jobTitle(),
  groupImage: faker.image.business(),
});

for (let index = 0; index < MESSAGES_AMOUNT; index++) {
  let chatId = index > 2 ? 0 : index;

  const message = Message.create({
    id: faker.database.mongodbObjectId(),
    chatId: chats[chatId].id,
    issuer: users[index].id,
    text: faker.word.verb(),
  });

  messages.push(message);
}

const write = (filename: string, data: any) =>
  writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

(async () => {
  await write("users.json", users);
  await write("chats.json", [...chats, groupChat]);
  await write("messages.json", messages); 
})();
