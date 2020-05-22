const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("user_");

    return res.json(results);
  },
};
