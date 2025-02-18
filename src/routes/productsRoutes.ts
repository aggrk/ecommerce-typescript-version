import express from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

export default router;
