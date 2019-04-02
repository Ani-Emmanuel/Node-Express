const express = require("express");
const leadersRouter = express.Router();

leadersRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-text", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will return all the leaders");
  })
  .post((req, res, next) => {
    res.end(
      "will create a new leader with: " +
        req.body.name +
        " and details: " +
        req.body.discription
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("can not perform " + req.method + " leader");
  })
  .delete((req, res, next) => {
    res.end("Will delete all the leaders");
  });

leadersRouter
  .route("/:leaderid")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will return the leader with the Id: " + req.params.leaderid);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "Can not perform " +
        req.method +
        " on leader with id " +
        req.params.leaderid
    );
  })
  .put((req, res, next) => {
    res.write("Updating leader with id: " + req.params.leaderid + "\n");
    res.end(
      "updated the leader with name " +
        req.body.name +
        " and details " +
        req.body.discription +
        " with the id: " +
        req.params.leaderid
    );
  })
  .delete((req, res, next) => {
    res.write("Deleting the leader with id: " + req.params.leaderid + "\n");
    res.end("The leader has been deleted successfully");
  });
module.exports = leadersRouter;
