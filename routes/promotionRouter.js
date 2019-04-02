const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will return all the promotions");
  })
  .post((req, res, next) => {
    res.end(
      "Will create a promo with name: " +
        req.body.name +
        " and details: " +
        req.body.discription
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Can not perform " + req.method + " on the promotion");
  })
  .delete((req, res, next) => {
    res.end("Will delete all promotions");
  });

promotionRouter
  .route("/:promoid")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(
      "will send the promo with the id " + req.params.promoid + " to you"
    );
  })

  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("Sorry you cannot perform " + req.method + " on promo");
  })

  .put((req, res, next) => {
    res.write("updating the promo: " + req.params.promoid + "\n");
    res.end(
      "Will update the promo: " +
        req.body.name +
        " with details: " +
        req.body.discription
    );
  })
  .delete((req, res, next) => {
    res.end("Will delete the promo: " + req.params.promoid);
  });

module.exports = promotionRouter;
