import request from "supertest";
import app from "../src/app.js";

describe("Posts", () => {

  test("Get Posts", async () => {

    const res = await request(app)
      .get("/api/posts");

    expect(res.statusCode).toBe(200);

  });

});