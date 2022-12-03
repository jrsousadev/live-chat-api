import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBUsers } from "../../_database";
import { faker } from "@faker-js/faker";

import request from "supertest";

describe("Get All Chats By User", () => {
  it("should return the all chats by user and HTTP Status 200", async () => {
    const firstItemInList = 0;

    const userId = fakeDBUsers[firstItemInList].id;
    const response = await request(app).get(`/api/chat/user/${userId}`);

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should occur error if none the user exist and HTTP status 400", async () => {
    const userId = "Invalid id";
    const response = await request(app).get(`/api/chat/user/${userId}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "User is not exist"}`)
    );
  });
});
