const knex = require("../database");

module.exports = {
  async index(req, res) {
    const user = await knex("user_").where({ email: req.body.email });
    console.log(user);
    const verify = JSON.stringify(user);
    if (verify == "[]") console.log("Email Incorreto");
    else {
      if (user[0].password_user === req.body.password_user)
        console.log("Login efetuado");
      else {
        console.log("Senha Incorreta");
      }
    }
    return res.json(user);
  },
};
