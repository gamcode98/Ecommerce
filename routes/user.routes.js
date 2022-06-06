const express = require("express");
const UserService = require("./../services/user.service");
const AuthService = require("./../services/auth.service");

function user(app) {
  const router = express.Router();
  app.use("/api/user", router);
  const userServ = new UserService();
  const authServ = new AuthService();

  router.get("/", async (req, res) => {
    const result = await userServ.getAll();
    return res.json(result);
  });

  router.post("/", async (req, res) => {
    const body = req.body;
    const result = await authServ.signup(body);
    return res.json(result);
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await userServ.update(id, body);
    return res.json(result);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await userServ.delete(id);
    return res.json(result);
  });
}

module.exports = user;
