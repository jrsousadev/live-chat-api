import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBChat } from "../../_database";
import { faker } from "@faker-js/faker";
import request from "supertest";

describe("Get All Messages By Chat", () => {
  it("should return the all chat messages and HTTP Status 200", async () => {
    const firstItemInList = 0;

    const chatId = fakeDBChat[firstItemInList].id;
    const response = await request(app).get(`/api/message/chat/${chatId}`);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.statusCode).toEqual(200);
  });

  it("should occur error if there is no chat and HTTP Status 400", async () => {
    const id = faker.database.mongodbObjectId();
    const response = await request(app).get(`/api/message/lastMessage/${id}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Chat is not exist"}`)
    );
  });

  it("should occur error if not sending a valid chat id and HTTP Status 400", async () => {
    const chatId = "fake id";
    const response = await request(app).get(`/api/message/chat/${chatId}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Invalid Chat ID"}`)
    );
  });
});
