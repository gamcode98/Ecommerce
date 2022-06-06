const express = require("express");
const morgan = require("morgan");
const { port } = require("./config");
const { connection } = require("./config/db");

const auth = require("./routes/auth.routes");
const user = require("./routes/user.routes");
const product = require("./routes/product.routes");
const category = require("./routes/category.routes");

const app = express();

connection();

app.use(morgan("dev"));
app.use(express.json());

auth(app);
user(app);
product(app);
category(app);

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
