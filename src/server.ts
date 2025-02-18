import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../config.env") });

const DB = process.env.DATABASE_STRING;

if (!DB) {
  console.error("There is no database string. Exiting...");
  process.exit(1);
}

mongoose
  .connect(DB)
  .then(() => console.log("Connected to mongodb successfully!"));

const PORT = Number(process.env.PORT);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
