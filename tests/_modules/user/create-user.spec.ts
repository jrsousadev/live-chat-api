import { serverHttp as app } from "../../../src/app/shared/app";
import { faker } from "@faker-js/faker";
import request from "supertest";


describe("Create User", () => {
  it("should create user successfully and HTTP Status 201", async () => {
    const response = await request(app).post("/api/user").send({
      name: faker.name.fullName(),
      image: faker.image.avatar(),
    });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should occur error if name property is empty and HTTP status 400", async () => {
    const response = await request(app).post("/api/user").send({
      name: "",
      image: faker.image.avatar(),
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "The name property is required"}`)
    );
  });

  it("should occur error if image property is empty and HTTP status 400", async () => {
    const response = await request(app).post("/api/user").send({
      name: faker.name.fullName(),
      image: "",
    });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.text)).toEqual(
      JSON.parse(`{"message": "The image property is required"}`)
    );
  });
});
