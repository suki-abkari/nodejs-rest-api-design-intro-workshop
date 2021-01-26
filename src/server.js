const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");

const config = require("./config/config");

const UserRouter = require("./routes/user-routes");

const bookRouter = require("./routes/book-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use(
  cors({
    origin: config.client.URL,
  }),
); 



app.use(bookRouter);
app.use(UserRouter);
module.exports = app;
