const express = require("express");
const ProductService = require("./../services/product.service");

function product(app) {
  const router = express.Router();
  app.use("/api/product", router);
  const productServ = new ProductService();

  router.get("/", async (req, res) => {
    const result = await productServ.getAll();
    return res.json(result);
  });

  router.post("/", async (req, res) => {
    const result = await productServ.create(req.body);
    return res.json(result);
  });

  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const result = await productServ.update(id, body);
    return res.json(result);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await productServ.delete(id);
    return res.json(result);
  });
}

module.exports = product;
