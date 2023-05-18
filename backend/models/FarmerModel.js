// this product model will be resonsible for quering prodcuts collection from database
const mongoose = require("mongoose");
const Review = require("./ReviewModel");
const imageSchema = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
});
const farmerSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true, // compulsonry property
    },
    lastname: {
      type: String,
      required: true, // compulsonry property
    },
    age: {
      type: Number,
      required: true, // compulsonry property
    },
    phoneNumber: {
      type: Number,
      required: true, // compulsonry property
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    // district: {
    //   type: String,
    //   required: true,
    // },
    pincode: {
      type: String,
      required: true,
    },

    // category:{
    //     type:String,
    //     required: true,// compulsonry property
    // },
    rating: {
      type: Number,
      // required: true,// compulsonry property
    },
    reviewsNumber: {
      type: Number,
    },
    sales: {
      type: Number,
      default: 0,
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: false,
      },
    // attrs: [{ key: { type: String }, value: { type: String } }],
    images: [imageSchema],
    reviewa: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
  },
  {
    timestamps: true,
  }
);
farmerSchema.index();
const Farmer = mongoose.model("Farmer", farmerSchema);
// this model will be used for quering products collection to fetch something from products(i.e. farmers in our case)
farmerSchema.index({ district: "text" });
// we are creating index for and the type of the index
module.exports = Farmer;
