import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required." });
    }
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(400).json({ message: "Internal error", error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted." });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Internal error", error });
  }
};
