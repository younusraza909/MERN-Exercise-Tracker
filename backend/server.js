const express = require("express");
//in orlder version of express we need boby parser pkg but now its in build in express
const cors = require("cors");
const mongoose = require("mongoose");
//for setting up enviroment variables
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database has Been Successfully Setup");
});

app.listen(port, () => {
  console.log(`Server is  running at port : ${port}`);
});
