const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json({ success: true, items }))
    .catch(err => res.status(404).json({ success: false, err }));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem
    .save()
    .then(item => res.json({ success: true, item }))
    .catch(err => res.status(404).json({ success: false, err }));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (item) item.remove().then(item => res.json({ item, success: true }));
    })
    .catch(err => res.status(404).json({ success: false, err }));
});

module.exports = router;
