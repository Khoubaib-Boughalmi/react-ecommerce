const Cart = require("../models/cart");
const router = require("express").Router();
const { verifyIsAdmin, verifyToken } = require("../middlewares/verifyToken");
// get status
router.get("/status", async (req, res) => {
  res.send("hello");
});

// Create products
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const result = await newCart.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error while adding item to cart");
  }
});
// Delete products
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("item has been deleted");
  } catch (error) {
    return res.status(500).json("error while deleting item from the cart");
  }
});

// //UPDATE PRODUCT
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      res.status(200).json(updatedCart)
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //get single product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Cart.findOne(req.params.id);
    return res.status(200).json(product._doc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//All users carts

router.get("/", verifyIsAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// // //get all product
// router.get("/", async (req, res) => {
//   const newQuery = req.query.new;
//   const categoryQuery = req.query.category;

//   try {
//     let products;
//     if (newQuery) {
//       products = await Product.find().sort({ createdAt: -1 }).limit(5);
//     } else if (categoryQuery) {
//       products = await Product.find({ categories: { $in: [categoryQuery] } });
//     } else {
//       products = await Product.find();
//     }
//     return res.status(200).json(products);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

module.exports = router;
