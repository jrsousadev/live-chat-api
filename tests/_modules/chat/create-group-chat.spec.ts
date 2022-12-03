import { serverHttp as app } from "../../../src/app/shared/app";
import { fakeDBUsers } from "../../_database";
import { faker } from "@faker-js/faker";

import request from "supertest";

describe("Create Group Chat", () => {
  it("should create group chat successfully and HTTP Status 201", async () => {
    const response = await request(app)
      .post("/api/chat/group")
      .send({
        groupName: "Company",
        groupImage: faker.image.avatar(),
        users: [fakeDBUsers[0].id, fakeDBUsers[1].id, fakeDBUsers[2].id],
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if none of the users exist and HTTP status 400", async () => {
    const response = await request(app)
      .post("/api/chat/group")
      .send({
        groupName: "Company",
        groupImage: faker.image.avatar(),
        users: ["fake id", fakeDBUsers[1].id, fakeDBUsers[2].id],
      });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "One of the users does not exist"}`)
    );
  });

  it("should occur error if groupName property is empty and HTTP status 400", async () => {
    const response = await request(app)
      .post("/api/chat/group")
      .send({
        groupName: "",
        groupImage: faker.image.avatar(),
        users: [fakeDBUsers[0].id, fakeDBUsers[1].id, fakeDBUsers[2].id],
      });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "The groupName property is required"}`)
    );
  });

  it("should occur error if groupImage property is empty and HTTP status 400", async () => {
    const response = await request(app)
      .post("/api/chat/group")
      .send({
        groupName: "Company",
        groupImage: "",
        users: [fakeDBUsers[0].id, fakeDBUsers[1].id, fakeDBUsers[2].id],
      });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "The groupImage property is required"}`)
    );
  });
});
