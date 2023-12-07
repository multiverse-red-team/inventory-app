const express = require("express");
const { Item } = require("../models/index");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);

    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
  const item = await Item.findByPk(req.params.id)
  const update = await item.update(req.body)
  res.json(update)
  } catch (error) {
    next(error)
  }
})


router.delete("/:id", async(req,res) =>{
  const item = await Item.findByPk(req.params.id);
  console.log(`item`, item)
  if (!item) {
    return res.status(404).send('Item not found');
  }
  await item.destroy()
  res.send("Item deleted")
})

router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);

    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
