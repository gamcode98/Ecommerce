const express = require("express");
const CategoryService = require("./../services/category.service");

function category(app) {
  const router = express.Router();
  app.use("/api/category", router);
  const categoryServ = new CategoryService();

  router.get("/", async (req, res) => {
    const result = await categoryServ.getAll();
    return res.json(result);
  });

  router.post("/", async (req, res) => {
    const body = req.body;
    const result = await categoryServ.create(body);
    return res.json(result);
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await categoryServ.update(id, body);
    return res.json(result);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await categoryServ.delete(id);
    return res.json(result);
  });
}

module.exports = category;
