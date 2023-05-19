const connectDB = require("../config/db");
connectDB();
//everytime we call seeder file it will insert category dummy data
const categoryData = require("./categories");
const farmerData = require("./farmers");
const reviewData = require("./reviews");
const userData = require("./users");
const productData = require("./products")
const orderData = require("./orders");

const Category = require("../models/CategoryModel");
const Farmer = require("../models/FarmerModel");
const Review = require("../models/ReviewModel");
const User = require("../models/UserModel");
const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");

const importData = async () => {
  try {
    // first we will delete the previous data and then insert the new data as we dont want it to grow
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Farmer.collection.deleteMany({});
    await Review.collection.deleteMany({});
    await User.collection.deleteMany({});
    await Order.collection.deleteMany({});
    await Product.collection.deleteMany({});


    await Category.insertMany(categoryData);
    const reviews = await Review.insertMany(reviewData);
    const sampleFarmers = farmerData.map((farmer) => {
      reviews.map((review) => {
        farmer.reviews.push(review._id);
      });
      return { ...farmer };
    });
    await Product.insertMany(productData);
    await Farmer.insertMany(sampleFarmers);
    await User.insertMany(userData);
    await Order.insertMany(orderData);

    console.log("Seeder data proceeded successfully");
    process.exit();
  } catch (er) {
    console.log("Error while processing seeder data", er);
    process.exit(1);
  }
};
importData();
