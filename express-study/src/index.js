import { UserRoutes } from './modules/user/user.routes.js';
import express from "express";

export class App {
    expressApp;
    router;

    constructor() {
        this.buildApp();
    }

    buildApp() {
        this.expressApp = express();
        this.router = express.Router();

        this.setMiddlewares();
        this.setRoutes();
    }

    setRoutes() {
        this.expressApp.use('/users', new UserRoutes(this.router).router);
    }

    setMiddlewares() {
        this.expressApp.use(express.json());
    }

    startServer() {
        const DEFAULT_PORT = 3000;

        this.expressApp.listen(DEFAULT_PORT, () => console.log(`Server running on http://localhost:${DEFAULT_PORT}`));
    }
}

export const application = new App();

export const applicationInstance = application.expressApp;

application.startServer();