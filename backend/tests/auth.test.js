const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { MongoMemoryReplSet } = require("mongodb-memory-server");
const User = require("../models/User");
const { Category } = require("../models/Category");

let mongoServer;
require('dotenv').config();


describe("Auth API", () => {
  beforeAll(async () => {
    process.env.JWT_SECRET = 'DwD6fjjd2BLTBazHZt9ZTRs7VPpNtfHT7CMdpMxb2Y4'; // Set a test JWT secret
    mongoServer = await MongoMemoryReplSet.create({ replSet: { count: 1 } });
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  beforeEach(async () => {
    await Promise.all([
      User.deleteMany({}),
      Category.deleteMany({}),
    ]);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  describe("POST /api/v1/auth/register", () => {
    it("should register a new user with valid data (201)", async () => {
      const res = await request(app).post("/api/v1/auth/register").send({
        name: "Test User 1",
        email: "user@example.com",
        password: "password123",
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body.user).toHaveProperty("email", "user@example.com");
      expect(res.body).toHaveProperty("token");

      const user = await User.findOne({ email: "user@example.com" });
      const systemCategories = await Category.find({
        userId: user._id,
        isSystem: true,
      }).sort({ type: 1 });

      expect(systemCategories).toHaveLength(2);
      expect(systemCategories[0]).toHaveProperty("name", "Expense");
      expect(systemCategories[0]).toHaveProperty("type", "expense");
      expect(systemCategories[0]).toHaveProperty("icon", "💸");
      expect(systemCategories[0]).toHaveProperty("isSystem", true);
      expect(systemCategories[1]).toHaveProperty("name", "Income");
      expect(systemCategories[1]).toHaveProperty("type", "income");
      expect(systemCategories[1]).toHaveProperty("icon", "💰");
      expect(systemCategories[1]).toHaveProperty("isSystem", true);
    });

    it("should return 400 if email is missing", async () => {
      const res = await request(app).post("/api/v1/auth/register").send({
        name: "No Email User",
        email: "",
        password: "password123",
      });

      console.log(res.body);

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("detail");
    });

    it("should return 409 if email is already taken", async () => {
      await request(app).post("/api/v1/auth/register").send({
        name: "Original User",
        email: "user@example.com",
        password: "password123",
      });

      const res = await request(app).post("/api/v1/auth/register").send({
        name: "Duplicate User",
        email: "user@example.com",
        password: "password321",
      });

      expect(res.statusCode).toEqual(409);
      expect(res.body).toHaveProperty("detail");
    });
  });

  describe("POST /api/v1/auth/login", () => {
    it("should login with correct credentials (200)", async () => {
      await request(app).post("/api/v1/auth/register").send({
        name: "Test User 1",
        email: "user@example.com",
        password: "password123",
      });

      const res = await request(app).post("/api/v1/auth/login").send({
        email: "user@example.com",
        password: "password123",
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body.user).toHaveProperty("name", "Test User 1");
      expect(res.body).toHaveProperty("token");
    });

    it("should return 400 if email is missing", async () => {
      const res = await request(app).post("/api/v1/auth/login").send({
        email: "",
        password: "password123",
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("detail");
    });

    it("should return 401 if password or email is incorrect", async () => {
      const res = await request(app).post("/api/v1/auth/login").send({
        email: "user@example.com",
        password: "wrongpassword",
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("detail");
    });
  });
});
