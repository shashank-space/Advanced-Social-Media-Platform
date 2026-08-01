import request from "supertest";
import app from "../src/app.js";

describe("Authentication", () => {

  test("GET /", async () => {

    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);

  });

});