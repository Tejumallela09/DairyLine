const express = require("express");
const {
  getFarmers,
  getFarmerById,
  FarmerImageUpload,
  FarmerFileUpload,
  adminGetFarmers,
  adminDeleteFarmer,
  registerFarmers,
  loginFarmers,
} = require("../controllers/farmerController");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })
router.get("/", getFarmers);
router.get("/get-one/:id", getFarmerById);
router.post("/uploadImage",FarmerImageUpload);
router.post("/uploadFile",FarmerFileUpload);
router.post("/register",registerFarmers);
router.post("/login",loginFarmers);
// router.post("/transactions",)


//admin routes:
router.get("/admin", adminGetFarmers);
router.get("/admin/:id", adminDeleteFarmer);
module.exports = router;
