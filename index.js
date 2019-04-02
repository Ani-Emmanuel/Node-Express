const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const localhost = "localhost";
const port = 3000;

const app = express();
const dishRouter = require("./routes/dishesRouter");
const promotionRouter = require("./routes/promotionRouter");
const leadersRouter = require("./routes/leadersRouter");
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);
app.use("/promotion", promotionRouter);
app.use("/leaders", leadersRouter);

app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 200;
  res.header("content-type", "text/html");
  res.end("<html><body><h1>this is the express server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, localhost, () => {
  console.log(`this server is running on http://${localhost}:${port}`);
});
