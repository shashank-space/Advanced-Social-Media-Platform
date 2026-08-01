import request from "supertest";
import app from "../src/app.js";

describe("Users", () => {

  test("Unauthorized Profile", async () => {

    const res = await request(app)
      .get("/api/users/me");

    expect(res.statusCode).toBe(401);

  });

});