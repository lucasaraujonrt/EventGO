const knex = require("../database");

module.exports = {
  async index(req, res) {
    const ticket = await knex("ticket");

    return res.json(ticket);
  },
};
