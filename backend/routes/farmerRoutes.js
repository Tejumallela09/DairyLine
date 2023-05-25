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
  updateFarmerProfile,
  getFarmerProfile
} = require("../controllers/farmerController");
const { verifyIsLoggedIn,verifyIsAdmin } = require("../middleware/verifyAuthtoken");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })
router.get("/", getFarmers);
router.get("/get-one/:id", getFarmerById);
router.post("/uploadImage", FarmerImageUpload);
router.post("/uploadFile", FarmerFileUpload);
router.post("/register", registerFarmers);
router.post("/login", loginFarmers);
//farmer logged in routes
router.use(verifyIsLoggedIn);
router.put("/profile", updateFarmerProfile);
router.get("/profile/:id", getFarmerProfile);
// router.post("/transactions",)

//admin routes:
router.use(verifyIsLoggedIn);
router.use(verifyIsAdmin);
router.get("/admin", adminGetFarmers);
router.delete("/admin/:id", adminDeleteFarmer);
module.exports = router;
