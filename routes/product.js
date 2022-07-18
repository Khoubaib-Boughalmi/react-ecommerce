const Product = require("../models/Product");
const router = require("express").Router();
const { verifyIsAdmin } = require("../middlewares/verifyToken");

// Create products
router.post("/", verifyIsAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const result = await newProduct.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json("error while creating new product");
  }
});
// Delete products
router.delete("/:id", verifyIsAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("product has been deleted");
  } catch (error) {
    return res.status(500).json("error while deleting product");
  }
});

//UPDATE PRODUCT
router.put("/:id", verifyIsAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      res.status(200).json(updatedProduct)
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //get single product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product._doc);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// //get all product
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  let categoryQuery;
  if (req.query.category) {
    categoryQuery = req.query.category;
  }
  try {
    let products;
    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (categoryQuery) {
      products = await Product.find({ categories: { $in: [categoryQuery] } });
    } else {
      products = await Product.find();
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
