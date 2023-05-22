const Farmer = require("../models/FarmerModel");
const { hashPassword, comparePasswords } = require("../utils/hashPasswords");
const generateAutthToken = require("../utils/generateAuthToken");
const recordsPerPage = require("../config/pagination");
const imageValidate = require("../utils/imageValidate");
const licenseValidate = require("../utils/licenseValidate");
const getFarmers = async (req, res, next) => {
  try {
    //filter
    let query = {};
    let queryCondition = false;
    let areaQueryCondition = {};
    if (req.query.area) {
      queryCondition = true;
      const area = req.query.area.trim();
      areaQueryCondition = { area: { $regex: new RegExp(`^${area}$`, "i") } };
    }
    let ratingQueryCondition = {};
    if (req.query.rating) {
      queryCondition = true;
      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }
    query = { $and: [areaQueryCondition, ratingQueryCondition] };

    //pagination
    const pageNum = Number(req.query.pageNum) || 1;
    const totalFarmers = await Farmer.countDocuments(query);
    const farmers = await Farmer.find(query)
      .skip(recordsPerPage * (pageNum - 1))
      .sort({ firstname: 1 })
      .limit(recordsPerPage);
    res.json({
      farmers,
      pageNum,
      paginationLinksNumber: Math.ceil(totalFarmers / recordsPerPage),
    });
  } catch (er) {
    next(er);
  }
};
const registerFarmers = async (req, res, next) => {
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
    const farmerExists = await Farmer.findOne({ phoneNumber });
    if (farmerExists) {
      return res.status(400).send("farmer exists");
    } else {
      const hashedPassword = hashPassword(password);
      const farmer = await Farmer.create({
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
          sucess: "Farmer Created ",
          userCreated: {
            _id: farmer._id,
            firstname: farmer.firstname,
            lastname: farmer.lastname,
            phoneNumber: farmer.phoneNumber,
            isAdmin: farmer.isAdmin,
          },
        });
    }
  } catch (er) {
    next(er);
  }
};
const loginFarmers = async (req, res, next) => {
  try {
    const { phoneNumber, password, doNotLogout } = req.body;
    if (!(phoneNumber && password)) {
      return res.status(400).send("All inuts are required");
    }
    const farmer = await Farmer.findOne({ phoneNumber });
    if (farmer && comparePasswords(password, farmer.password)) {
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
            farmer._id,
            farmer.firstname,
            farmer.lastname,
            farmer.phoneNumber,
            farmer.isAdmin
          ),
          cookieParams
        )
        .json({
          success: "farmer logged in",
          userLoggedIn: {
            _id: farmer._id,
            firstname: farmer.firstname,
            lastname: farmer.lastname,
            phoneNumber: farmer.phoneNumber,
            isAdmin: farmer.isAdmin,
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
const getFarmerById = async (req, res, next) => {
  try {
    const farmer = await Farmer.findById(req.params.id)
      .populate("reviews")
      .orFail();
    res.json(farmer);
  } catch (er) {
    next(er);
  }
};
const FarmerImageUpload = async (req, res, next) => {
  try {
    if (!req.files || !!req.files.images === false) {
      return res.status(400).send("No files were uploaded.");
    }
    const validateResult = imageValidate(req.files.images);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }

    const path = require("path");
    const { v4: uuidv4 } = require("uuid");
    const uploadDirectory = path.resolve(
      __dirname,
      "../../frontend",
      "public",
      "images",
      "farmerImages"
    );
    // console.log(req.query.farmerId)
    let farmer = await Farmer.findById(req.query.farmerId).orFail();
    let imagesTable = [];
    if (Array.isArray(req.files.images)) {
      imagesTable = req.files.images;
      //   res.send("You sent " + req.files.images.length + " images");
    } else {
      //   res.send("You sent only one image");
      imagesTable.push(req.files.images);
    }
    for (let image of imagesTable) {
      // console.log(image)
      // console.log(path.extname(image.name))
      // console.log(uuidv4())
      var fileName = uuidv4() + path.extname(image.name);
      var uploadPath = uploadDirectory + "/" + fileName;
      farmer.images.push({ path: "/images/farmerImages" + fileName });
      image.mv(uploadPath, function (err) {
        if (err) {
          return res.statuse(500).send(err);
        }
      });
    }
    await farmer.save();
    return res.send("Image Uploaded");
  } catch (err) {
    next(err);
  }
};
const FarmerFileUpload = async (req, res, next) => {
  try {
    if (!req.files || !!req.files.license === false) {
      return res.status(400).send("No files were uploaded.");
    }
    const validateResult = licenseValidate(req.files.license);
    if (validateResult.error) {
      return res.status(400).send(validateResult.error);
    }
    const path = require("path");
    const { v4: uuidv4 } = require("uuid");
    const uploadDirectory = path.resolve(
      __dirname,
      "../../frontend",
      "public",
      "images",
      "farmerLicenses"
    );
    // console.log(req.query.farmerId)
    let farmer = await Farmer.findById(req.query.farmerId).orFail();
    let licensesTable = [];
    if (Array.isArray(req.files.license)) {
      licensesTable = req.files.license;
      //   res.send("You sent " + req.files.license.length + " licenses");
    } else {
      licensesTable.push(req.files.license);
      //   res.send("You sent only one license");
    }
    for (let license of licensesTable) {
      // console.log(license)
      // console.log(path.extname(license.name))
      // console.log(uuidv4())
      var fileName = uuidv4() + path.extname(license.name);
      var uploadPath = uploadDirectory + "/" + fileName;
      farmer.license.push({ path: "/images/farmerLicenses" + fileName });
      license.mv(uploadPath, function (err) {
        if (err) {
          return res.statuse(500).send(err);
        }
      });
    }
    await farmer.save();
    return res.send("License Uploaded");
  } catch (error) {
    next(error);
  }
};

const adminGetFarmers = async (req, res, next) => {
  try {
    console.log(req.farmer);
    const farmers = await Farmer.find({})
      .sort({ area: 1 })
      .select("firstname lastname phoneNumber");
    return res.json(farmers);
  } catch (err) {
    next(err);
  }
};
const adminDeleteFarmer = async (req, res, next) => {
  try {
    const farmer = await Farmer.findById(req.params.id).orFail();
    await farmer.deleteOne();
    return res.json({ message: "Farmer removed" });
  } catch (err) {
    next(err);
  }
};
const updateFarmerProfile = async (req, res, next) => {
  try {
    const farmer = await Farmer.findById(req.farmer._id).orFail();
    farmer.firstname = req.body.firstname || farmer.firstname;
    farmer.lastname = req.body.lastname || farmer.lastname;
    farmer.phoneNumber = req.body.phoneNumber;
    farmer.address = req.body.address;
    farmer.area = req.body.area;
    farmer.pincode = req.body.pincode;
    if (req.body.password !== farmer.password) {
      farmer.password = hashPassword(req.body.password);
    }
    await farmer.save();
    res.json({
      success:"farmer updated",
      farmerUpdated:{
        _id:farmer._id,
        firstname:farmer.firstname,
        lastname:farmer.lastname,
        phoneNumber:farmer.phoneNumber,
        isAdmin:farmer.isAdmin

      },
    })
  } catch (er) {
    next(er);
  }
};
module.exports = {
  getFarmers,
  getFarmerById,
  FarmerImageUpload,
  FarmerFileUpload,
  adminGetFarmers,
  adminDeleteFarmer,
  registerFarmers,
  loginFarmers,
  updateFarmerProfile,
};
