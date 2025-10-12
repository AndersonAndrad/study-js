import { App } from "../src";

describe(App.name, () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  it("should defined express app", () => {
    expect(app).toBeDefined();
  });

  it("should create express app instance", () => {
    expect(app.expressApp).toBeDefined();
  });

  it("should start server", () => {
    const listenSpy = jest.spyOn(app.expressApp, "listen").mockImplementation((port, callback) => {
      if (callback) callback();
      return {};
    });

    app.startServer();

    expect(listenSpy).toHaveBeenCalledWith(3000, expect.any(Function));
  });

  it('should set up middleware', () => {
    const useSpy = jest.spyOn(app.expressApp, 'use');

    app.setMiddlewares();

    expect(useSpy).toHaveBeenCalled();
  });

  it('should set up users routes', () => {
    const useSpy = jest.spyOn(app.expressApp, 'use');

    app.setRoutes();

    expect(useSpy).toHaveBeenCalledWith('/users', expect.anything());
  })
})