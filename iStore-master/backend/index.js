const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileUpload");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

const connectToMongoose = () =>
  mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect to mongoDB");
    })
    .catch((err) => {
      console.log(`failed to connect to mongo ${err.message}`);
    });

require("dotenv").config();

const app = express();
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: 52428800,
    extended: true,
    type: "application/x-www-form-urlencoded",
  })
);
app.use(bodyParser.json());

app.use("/", require("./routes/userRoute"));
app.use("/", require("./routes/productRoute"));

connectToMongoose();
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
