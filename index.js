const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const { port } = require("./config");
const { connection } = require("./config/db");

const auth = require("./routes/auth.routes");
const user = require("./routes/user.routes");
const product = require("./routes/product.routes");
const category = require("./routes/category.routes");
// const {
//   useGoogleStrategy,
//   useFacebookStrategy,
// } = require("./middlewares/authProvider");

const app = express();

connection();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(passport.initialize());
// Usando strategias
// passport.use(useGoogleStrategy());
// passport.use(useFacebookStrategy());

auth(app);
user(app);
product(app);
category(app);

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
