const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    price:String,
    category: {
        type: String,
        enum: ["dishes", "dessert && snack"]
      }
  });
  
const Product = mongoose.model("product", productSchema);

module.exports = Product;