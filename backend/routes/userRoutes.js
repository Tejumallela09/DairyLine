const express = require("express");
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthtoken");
const {
  getUsers,
  registerUsers,
  loginUsers,
  updateUserProfile,
  getUserProfile,
} = require("../controllers/userController");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })

router.post("/register", registerUsers);
router.post("/login", loginUsers);

// user logged in routes:
router.use(verifyIsLoggedIn);
router.put("/profile", updateUserProfile);
router.get("/profile/:id", getUserProfile);

//admin
router.use(verifyIsAdmin);
router.get("/", getUsers);

module.exports = router;
