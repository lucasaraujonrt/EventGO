const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("ticket");

    return res.json(results);
  },
};
