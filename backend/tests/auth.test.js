const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer;

describe('Auth API', () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri); // Тепер тести підключаються до "віртуальної" бази
    });

    afterAll(async () => {
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    it('hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'API is working');
    });

    // it('should register a new user', async () => {
    //     const res = await request(app)
    //         .post('/api/v1/auth/register')
    //         .send({
    //             name: 'Roman',
    //             email: 'roman@example.com',
    //             password: 'password123'
    //         });

    //     expect(res.statusCode).toEqual(201);
    //     expect(res.body.user).toHaveProperty('email', 'roman@example.com');
    //     expect(res.body).toHaveProperty('token');
    // });
});