import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app.js";
import todoCollection from "../Model/todoModel.js";
let mongoServer;
// Runs once before all tests
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});
// Runs after every test
afterEach(async () => {
    await todoCollection.deleteMany({});
});
// Runs once after all tests
afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe("Todo API", () => {
    // ==========================
    // TEST 1: SUCCESS CASE
    // ==========================
    test("should create a todo successfully", async () => {
        // Send POST request
        const response = await request(app)
            .post("/todo/post")
            .send({
                todo: "Learn Jest"
            });
        // Check status code
        expect(response.statusCode).toBe(201);


        // Check API response
        expect(response.body.message)
            .toBe("data has been stored");
        // Check database
        const savedTodo = await todoCollection.findOne({
            todo: "Learn Jest"
        });
        expect(savedTodo).not.toBeNull();
        expect(savedTodo.todo)
            .toBe("Learn Jest");
    });
    // ==========================
    // TEST 2: FAILURE CASE
    // ==========================
    test("should reject request without todo", async () => {
        const response = await request(app)
            .post("/todo/post")
            .send({});
        // Required field is missing
        expect(response.statusCode).toBe(400);

    });

});