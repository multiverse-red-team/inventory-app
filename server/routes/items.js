const express = require("express");
const { Item } = require("../models/index");
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

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


router.delete("/:id", async(req,res) =>{
  const item = await Item.findByPk(req.params.id);
  console.log(`item`, item)
  if (!item) {
    return res.status(404).send('Item not found');
  }
  await item.destroy()
  res.send("Item deleted")
})

module.exports = router;
