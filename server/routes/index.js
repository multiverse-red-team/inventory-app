const express = require("express");
const router = express.Router();
const itemsRouter = require("./items");

// different model routers
// router.use("/sauces", require("./sauces"));
router.use("/items", itemsRouter);

module.exports = router;
