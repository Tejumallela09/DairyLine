const Veterinary = require("../models/VeterinaryModel");
const getVeteneries = async (req, res, next) => {
    // Farmer.create({name:"Raju"})
    // res.send("Handling user routes, e.g. search for users")
    try {
      const users = await User.find({}).select("-password");
      return res.json(users);
    } catch (er) {
      next(er);
    }
  };
  module.exports = getVeteneries;