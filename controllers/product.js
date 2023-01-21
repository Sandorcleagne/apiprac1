const productModel = require("../models/productSchema");
const PostProducts = async (req, res) => {
  const { name, price, feature, rating, company } = req.body;
  const productData = new productModel({
    name: name,
    price: price,
    feature: feature,
    rating: rating,
    company: company,
  });
  if (name && price && feature && rating && company) {
    await productData.save();
    res.send("Data saved sucessfully");
  } else {
    res.send("All Feilds are required");
  }
};
const getAllProducts = (req, res) => {
  const allProducts = productModel.find({});
  if (allProducts) {
    res.send(allProducts);
  } else {
    res.send({ msg: "No Products Found" });
  }
};
module.exports = { getAllProducts, PostProducts };
