const express = require("express");
const requestRoute = express.Router();
const {
    postRequest,
    getRequests,
    getOneRequest,
} = require("../Controllers/requestController");

requestRoute.get("/requests", getRequests);
requestRoute.post("/requests", postRequest);
requestRoute.get("/requests/:id", getOneRequest);


module.exports = requestRoute;
