import { serverHttp as app } from "../../../src/app/shared/app";
import { faker } from "@faker-js/faker";
import request from "supertest";
import { fakeDBUsers } from "../../_database";


describe("Get User", () => {
  it("should return the user and HTTP Status 200", async () => {
    const userId = fakeDBUsers[0].id

    const response = await request(app).get(`/api/user/${userId}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if none the user exist and HTTP status 400", async () => {
    const userId = "invalid id"

    const response = await request(app).get(`/api/user/${userId}`);

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "User is not exist"}`)
    );
  });
});