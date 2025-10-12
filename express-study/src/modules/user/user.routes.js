
export class UserRoutes {
  router;

  constructor(router) {
    this.router = router;
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get("/", (req, res) => {
      res.json({
        items: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" }
        ]
      });
    });
  }
}
