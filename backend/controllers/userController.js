const User = require("../models/UserModel");
const { hashPassword, comparePasswords } = require("../utils/hashPasswords");
const generateAutthToken = require("../utils/generateAuthToken");
const getUsers = async (req, res, next) => {
  // Farmer.create({name:"Raju"})
  // res.send("Handling user routes, e.g. search for users")
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (er) {
    next(er);
  }
};
const registerUsers = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      phoneNumber,
      password,
      pincode,
      area,
      address,
    } = req.body;
    if (
      !(
        firstname &&
        lastname &&
        phoneNumber &&
        password &&
        pincode &&
        area &&
        address
      )
    ) {
      return res.status(400).send("All inputs are required");
    }
    const userExists = await User.findOne({ phoneNumber });
    if (userExists) {
      return res.status(400).send("user exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        firstname,
        lastname,
        phoneNumber,
        password: hashedPassword,
        pincode: pincode,
        area: area,
        address: address,
      });
      res
        .cookie("access_token", generateAutthToken, {
          httpOnly: true,
          secure: process.env.NOdE_ENV === "prodcution",
          sameSite: "strict",
        })
        .status(201)
        .json({
          sucess: "User Created ",
          userCreated: {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (er) {
    next(er);
  }
};
const loginUsers = async (req, res, next) => {
  try {
    const { phoneNumber, password, doNotLogout } = req.body;
    if (!(phoneNumber && password)) {
      return res.status(400).send("All inuts are required");
    }
    const user = await User.findOne({ phoneNumber });
    if (user && comparePasswords(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        secure: process.env.NOdE_ENV === "prodcution",
        sameSite: "strict",
      };
      if (doNotLogout) {
        cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 1 };
      }
      return res
        .cookie(
          "access_token",
          generateAutthToken(
            user._id,
            user.firstname,
            user.lastname,
            user.phoneNumber,
            user.isAdmin
          ),
          cookieParams
        )
        .json({
          success: "user logged in",
          userLoggedIn: {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNumber: user.phoneNumber,
            isAdmin: user.isAdmin,
            doNotLogout,
          },
        });
    } else {
      return res.status(401).send("wrong credentials");
    }
  } catch (er) {
    next(er);
  }
};
const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail();
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.phoneNumber = req.body.phoneNumber;
    user.address = req.body.address;
    user.area = req.body.area;
    user.pincode = req.body.pincode;
    if(req.body.password !== user.password){
      user.password=hashPassword(req.body.password)
    }
    await user.save();
    res.json({
      success:"user updated",
      userUpdated:{
        _id:user._id,
        firstname:user.firstname,
        lastname:user.lastname,
        phoneNumber:user.phoneNumber,
        isAdmin:user.isAdmin

      },
    })
  } catch (er) {
    next(er);
  }
};
module.exports = { getUsers, registerUsers, loginUsers, updateUserProfile };
