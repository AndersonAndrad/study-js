import express from "express";

export class App {
    expressApp;

    constructor(){
        this.buildApp();
    }

    buildApp(){
        this.expressApp = express();
    }
    
    startServer(){
        const DEFAULT_PORT = 3000;

        this.expressApp.listen(DEFAULT_PORT, () => console.log(`Server running on http://localhost:${DEFAULT_PORT}`));
    }
}

export const application = new App().startServer();