const mongoose = require("mongoose");
const connectDb = async (uri) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
