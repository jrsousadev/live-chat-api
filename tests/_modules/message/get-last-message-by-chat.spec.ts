import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBChat } from "../../_database";
import request from "supertest";

describe("Get Last Message By Chat", () => {
  it("should return the last chat message and HTTP Status 200", async () => {
    const firstItemInList = 0;

    const chatId = fakeDBChat[firstItemInList].id;
    const response = await request(app).get(`/api/message/lastMessage/${chatId}`);
    
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.statusCode).toEqual(200);
  });

  it("should occur error if not sending a valid id and HTTP Status 400", async () => {
    const id = "invalid id";
    const response = await request(app).get(`/api/message/lastMessage/${id}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Invalid id"}`)
    );
  });
});
