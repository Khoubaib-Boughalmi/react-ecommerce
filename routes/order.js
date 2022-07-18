const Order = require("../models/Order");
const router = require("express").Router();
const { verifyIsAdmin, verifyToken } = require("../middlewares/verifyToken");

// Create products
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const result = await newOrder.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error while adding item to Order");
  }
});
// Delete products
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("item has been deleted");
  } catch (error) {
    return res.status(500).json("error while deleting item from the Order");
  }
});

// //UPDATE PRODUCT
router.put("/:id", verifyIsAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      res.status(200).json(updatedOrder)
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //get single product
router.get("/find/:id", async (req, res) => {
  try {
    const order = await Order.find(req.params.id);
    return res.status(200).json(order._doc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//All users Orders

router.get("/", verifyIsAdmin, async (req, res) => {
  try {
    const Orders = await Order.find();
    return res.status(200).json(Orders);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//GET monthly income
router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {}
});
module.exports = router;
