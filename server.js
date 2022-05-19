require("dotenv").config();
const express = require("express");
const dbConn = require("./db/conn");
const app = express();
const errorHandler = require("./helpers/error-handler");

// Database connection
dbConn();

app.use(express.json());

// Group Routings
app.use("/moods", require("./routes/moods"));
app.use("/users", require("./routes/users"));

// global error handler
app.use(errorHandler);

// not found handler
app.use((req, res, next) => {
  res.status(404).json({ status: 404 });
});

app.listen(3000, () => console.log("Server Started"));
