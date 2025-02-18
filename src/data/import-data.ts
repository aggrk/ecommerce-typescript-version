import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Product from "../models/productModel.js";
import dotenv from "dotenv";
import { argv } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../config.env") });

type ProductsType = {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
};

const products: ProductsType[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf-8")
);

const DB = process.env.DATABASE_STRING;

if (!DB) {
  console.error("There is no connection string. Exiting...");
  process.exit(1);
}

mongoose.connect(DB).then(() => console.log("Connected Successfully"));

async function importData() {
  try {
    await Product.create(products);
  } catch (err) {
    console.log("Data not inserted", err);
  } finally {
    process.exit();
  }
}

async function deleteData() {
  try {
    await Product.deleteMany();
  } catch (err) {
    console.log("Data not deleted", err);
  } finally {
    process.exit();
  }
}

if (argv[2] === "--import") {
  importData();
} else if (argv[2] === "--delete") {
  deleteData();
}
