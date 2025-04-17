const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    console.log("menu items fetched");
    res.status(200).json(menuItems);
  } catch (error) {
    console.log("error in fetching menu items");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const response = await newItem.save();
    console.log("menu saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ err: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const tasteType = req.params.taste;
    const items = await MenuItem.find({ taste: tasteType });
    console.log("menu items found with this taste");
    res.status(200).json(items);
  } catch (error) {
    console.log("some error in finding dishes acc to taste");
    res.status(500).json({ error: "Internal server error" });
  }
});

//menu update
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedData = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuId, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      res.status(404).json({ error: "menu not found" });
    }
    console.log("menu updated");
    res.status(200).json(response);
  } catch (error) {
    console.log('some error in updating menu')
    res.status(500).json({error:"Internal server error"})
  }
})

router.delete('/:id',async(req,res) => {
    try {
        const menuId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuId)
        if(!response){
            res.status(404).json({ error: "menu not found" });
        }
        console.log('data deleted')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal Server error"})
    }
})

module.exports = router;
