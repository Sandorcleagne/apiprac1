const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  price: { type: Number, require: true, trim: true },
  feature: { type: Boolean, require: true, trim: true, default: false },
  rating: { type: Number, trim: true, default: 4.9 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    require: true,
    trim: true,
    enum: { values: ["Apple", "Dell", "Samsung", "MI"] },
  },
});
const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
