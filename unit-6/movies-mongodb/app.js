require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const userController = require("./controllers/user.controller.js");
const movieController = require("./controllers/movie.controller");
const mongoose = require("mongoose"); // used from node_modules
const DBURL = process.env.DBURL;

mongoose.connect(`${DBURL}/moviedb`); // connection middleware. Establishes route and defining our Collection we are targeting

const db = mongoose.connection; // event listener to cheick if connected
// * Doesn't display until there is a document within the collection.

db.once("open", () => console.log(`Connected: ${DBURL}`)); // event listener to check connection

app.use(express.json());
app.use("/user", userController);
app.use("/movie", movieController);

app.listen(PORT, () => console.log(`Movie server running on Port: ${PORT}`));
