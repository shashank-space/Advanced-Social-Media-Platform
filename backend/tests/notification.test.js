import request from "supertest";
import app from "../src/app.js";

describe("Notifications", () => {

  test("Unauthorized Notifications", async () => {

    const res = await request(app)
      .get("/api/notifications");

    expect(res.statusCode).toBe(401);

  });

});