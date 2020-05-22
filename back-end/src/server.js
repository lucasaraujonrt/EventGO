const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routes = require("./routes");

app.use(bodyparser.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running"));
