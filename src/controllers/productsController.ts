import { RequestHandler } from "express";
import Product from "../models/productModel.js";

export const getProducts: RequestHandler = (req, res) => {
  res.send("Kennedy");
};

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
