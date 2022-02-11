// DEPENDENCIES
// ----- CORS ----- //
const cors = require('cors');
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
require("dotenv").config();

// ROUTES

app.get("/", (request, response) => {
    response.send("Get Snack'n at Snack-a-log!")
})

app.get("*", (request, response) => {
    response.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
