import { UserRoutes } from "../user.routes.js";
import { applicationInstance } from "../../../index.js";
import express from "express";
import request from "supertest";

describe(UserRoutes.name, () => {
  let userRoutes;
  let router;

  beforeEach(() => {
    router = express.Router();
    userRoutes = new UserRoutes(router);
  });

  it("should be defined", () => {
    expect(userRoutes).toBeDefined();
  });

  it("should have a GET / route", () => {
    const route = userRoutes.router.stack.find(
      (layer) => layer.route && layer.route.path === "/" && layer.route.methods.get
    );
    expect(route).toBeDefined();
  });

  it("should define the / route via get()", () => {
    const spy = jest.spyOn(userRoutes.router, "get");
    userRoutes.setupRoutes();
    expect(spy).toHaveBeenCalledWith("/", expect.any(Function));
  });

  it("should respond with JSON and correct data", async () => {
    const response = await request(applicationInstance).get("/users");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({
      items: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ],
    });
  });
});
