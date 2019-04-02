const express = require("express");
const dishesRouter = express.Router();

dishesRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("will send all the dishes to you");
  })

  .post((req, res, next) => {
    res.end(
      "Will send the dish " +
        req.body.name +
        " with the discription " +
        req.body.discription
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Sorry you cannot perform " + req.method + " on this Item");
  })
  .delete((req, res, next) => {
    res.end("deleting the all the dishes");
  });

dishesRouter
  .route("/:dishid")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "will send the dishes with the id " + req.params.dishid + " to you"
    );
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("Sorry you cannot perform " + req.method + " on dish");
  })

  .put((req, res, next) => {
    res.write("updating the dish: " + req.params.dishid + "\n");
    res.end(
      "Will update the dish: " +
        req.body.name +
        " with details: " +
        req.body.discription
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete the dish: " + req.params.dishid);
  });

module.exports = dishesRouter;
