const express = require("express");
const {Item} = require("../models/index")
const router = express.Router();

// Get All Items
router.get("/", async(req,res) =>{
    const items = await Item.findAll();
    res.json(items)
})

module.exports = router;