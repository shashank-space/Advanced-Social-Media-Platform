import request from "supertest";
import app from "../src/app.js";

describe("Chat", () => {

  test("Unauthorized Chat", async () => {

    const res = await request(app)
      .get("/api/chat");

    expect(res.statusCode).toBe(401);

  });

});