import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBChat } from "../../_database";

import request from "supertest";

describe("Get Chat", () => {
  it("should return the chat and HTTP Status 200", async () => {
    const firstItemInList = 0;

    const response = await request(app).get(`/api/chat/${fakeDBChat[firstItemInList].id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if none the chat exist and HTTP status 400", async () => {
    const response = await request(app).get(`/api/chat/kqwodkoqw}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Chat is not exist"}`)
    );
  });
});
