const mongoose = require("mongoose");
const User = require("./UserModel");
const Farmer = require("./FarmerModel");
const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Farmer,
  },
  // orderTotal:{
  //     itemsCount:{type:Number,required: true,},
  //     // cartSubtotal:{type:Number,required: true}
  // },
  cartItems: [
    {
      name: { type: String, required: true },
      // price: { type: Number, required: true },
      // image: { path: { type: String, required: true } },
      quantity: { type: Number, required: true },
    },
  ],
  // transactionResult: {
  //   status: { type: String },
  //   createTime: { type: String },
  //   amount: { type: Number },
  // },
  frequency: {
    type: String,
    required: true,
    enum: ['daily', 'weekly', 'monthly'],
  },
  // isPaid: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  days:{
    type:String,
    // required: true
  },
  OrderDate: {
    type: Date,
  },
  // isDelivered: {
  //   type: Boolean,
  //   required: true,
  //   default:false,
  // },
  // deliveredAt:{
  //   type:Date
  // },
},{
    timestamps: true,
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Customer",
//     required: true,
//   },
//   restaurant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Restaurant",
//     required: true,
//   },
//   products: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//   ],
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   deliveryAddress: {
//     type: String,
//     required: true,
//   },
//   orderDate: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Order = mongoose.model("Order", orderSchema);

// module.exports = Order;