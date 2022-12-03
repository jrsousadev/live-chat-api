import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBUsers } from "../../_database";
import request from "supertest";

describe("Create Chat", () => {
  it("should create chat successfully and HTTP Status 201", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/chat").send({
      userOne: fakeDBUsers[firstItemInList].id,
      userTwo: fakeDBUsers[firstItemInList].id,
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if not exist user one and HTTP Status 400", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/chat").send({
      userOne: "kdqwkdoq",
      userTwo: fakeDBUsers[firstItemInList].id,
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "One of the users does not exist"}`)
    );
  });

  it("should occur error if not exist user two and HTTP Status 400", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/chat").send({
      userOne: fakeDBUsers[firstItemInList].id,
      userTwo: "dqwokdoqw",
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "One of the users does not exist"}`)
    );
  });
});
