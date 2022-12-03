import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBMessages } from "../../_database";
import { faker } from "@faker-js/faker";
import request from "supertest";

describe("Get Message", () => {
  it("should create message successfully and HTTP Status 200", async () => {
    const firstItemInList = 0;

    const id = fakeDBMessages[firstItemInList].id;
    const response = await request(app).get(`/api/message/${id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if not sending a valid id and HTTP Status 400", async () => {
    const id = "invalid id";
    const response = await request(app).get(`/api/message/${id}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Invalid id"}`)
    );
  });

  it("should occur error if not found and HTTP Status 400", async () => {
    const id = faker.database.mongodbObjectId();
    const response = await request(app).get(`/api/message/${id}`);

    expect(response.statusCode).toEqual(400);
    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Message does not exists."}`)
    );
  });
});
