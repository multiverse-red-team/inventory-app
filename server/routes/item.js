const express = require("express");
const { Item } = require("../models/index");
const router = express.Router();

// Get All Items
router.get("/", async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);

    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
