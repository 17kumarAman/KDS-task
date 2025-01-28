import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

router.post("/api/products", addProduct);
router.get("/api/products", getProducts);
router.delete("/api/products/:id", deleteProduct);

export default router;
