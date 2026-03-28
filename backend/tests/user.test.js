const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
require("dotenv").config();

describe("User API", () => {
  beforeAll(async () => {
    process.env.JWT_SECRET = "DwD6fjjd2BLTBazHZt9ZTRs7VPpNtfHT7CMdpMxb2Y4"; // Set a test JWT secret
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  describe("DELETE /api/v1/users/me", () => {
    it("should return 204 No Content", async () => {
      const registerRes = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "Test User 2",
          email: "user2@example.com",
          password: "password123",
        });

      expect(registerRes.statusCode).toEqual(201);
      expect(registerRes.body).toHaveProperty("token");
      const userToken = registerRes.body.token;

      const res = await request(app)
        .delete("/api/v1/users/me")
        .set("Authorization", userToken);

      expect(res.statusCode).toEqual(204);
    });

    it("should return 401 if no token provided", async () => {
      const res = await request(app)
        .delete("/api/v1/users/me")
        .set("Authorization", "");

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("detail");
    });
  });

  describe("PATCH /api/v1/users/me", () => {
    it("should return 200 OK", async () => {
      const registerRes = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "Test User 3",
          email: "user3@example.com",
          password: "password123",
        });

      expect(registerRes.statusCode).toEqual(201);
      expect(registerRes.body).toHaveProperty("token");
      const userToken = registerRes.body.token;

      const res = await request(app)
        .patch("/api/v1/users/me")
        .set("Authorization", userToken)
        .send({
          name: "Updated User 3",
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body.user).toHaveProperty("name", "Updated User 3");
    });

    it("should return 401 if no token provided", async () => {
      const res = await request(app)
        .patch("/api/v1/users/me")
        .set("Authorization", "");

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("detail");
    });

    it("should return 400 if invalid data provided", async () => {
      const registerRes = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "Test User 4",
          email: "user4@example.com",
          password: "password123",
        });

      expect(registerRes.statusCode).toEqual(201);
      expect(registerRes.body).toHaveProperty("token");
      const userToken = registerRes.body.token;

      const res = await request(app)
        .patch("/api/v1/users/me")
        .set("Authorization", userToken)
        .send({
          name: "",
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("detail");
    });
  });
});
