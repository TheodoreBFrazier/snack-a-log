// DEPENDENCIES
// ----- CORS ----- //
const cors = require('cors');
const express = require("express");
const snackController = require("./controllers/snackController.js")


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snackController);
// require("dotenv").config();

// ROUTES

app.get("/", (request, response) => {
    response.send("Get Snack'n at Snack-a-log!");
});


app.get("*", (request, response) => {
    response.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
