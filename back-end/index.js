const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const UserRouter = require("./src/Routers/UserRouter");
const path = require('path');

const app = express();

// Initiate Mongo Server
InitiateMongoServer();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", UserRouter);


app.use(express.static('client/build'));


app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});