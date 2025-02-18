import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  rating: {
    type: Number,
    min: [1.0, "Rating should not be less that 1"],
    max: [5.0, "Rating should not be greater than 5"],
  },
  image: String,
  category: String,
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
