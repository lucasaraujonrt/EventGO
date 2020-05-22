const express = require("express");
const routes = express.Router();
const knex = require("./database");

routes.get("/user", (req, res) => {
  knex("user_").then((results) => res.json(results));
});

module.exports = routes;
