const express = require("express");
const routes = express.Router();
const knex = require("./database");
const userController = require("./controllers/userController");
const eventController = require("./controllers/eventController");
const ticketController = require("./controllers/ticketController");

routes.get("/user", userController.index);
routes.get("/event", eventController.index);
routes.get("/ticket", ticketController.index);

module.exports = routes;
