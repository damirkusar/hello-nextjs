const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
console.log("--------------------------------");
console.log("NODE_ENV", process.env.NODE_ENV);
console.log("booooom", dev);
console.log("--------------------------------");
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on", port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
