const knex = require("../database");

module.exports = {
  async index(req, res) {
    const event = await knex("event_");

    return res.json(event);
  },
};
