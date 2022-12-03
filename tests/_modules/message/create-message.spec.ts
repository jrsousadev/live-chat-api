import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBChat, fakeDBUsers } from "../../_database";
import request from "supertest";

describe("Create Message", () => {
  it("should create message successfully and HTTP Status 201", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/message").send({
      chatId: fakeDBChat[firstItemInList].id,
      issuer: fakeDBUsers[firstItemInList].id,
      text: "Hello World!",
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if not sending a valid chatId and HTTP Status 400", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/message").send({
      chatId: "invalid chatId",
      issuer: fakeDBUsers[firstItemInList].id,
      text: "Hello World!",
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Chat is not exists."}`)
    );
  });

  it("should occur error if not sending a valid issuer and HTTP Status 400", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/message").send({
      chatId: fakeDBChat[firstItemInList].id,
      issuer: "invalid issuer",
      text: "Hello World!",
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Issuer is not exists."}`)
    );
  });

  it("should error occur if sending an empty message and HTTP Status 400", async () => {
    const firstItemInList = 0;

    const response = await request(app).post("/api/message").send({
      chatId: fakeDBChat[firstItemInList].id,
      issuer: fakeDBUsers[firstItemInList].id,
      text: "",
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "Invalid message"}`)
    );
  });
});
