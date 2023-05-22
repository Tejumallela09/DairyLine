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
} = require("../controllers/userController");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })

router.post("/register", registerUsers);
router.post("/login", loginUsers);
// user logged in routes
router.use(verifyIsLoggedIn);
router.put("/profile", updateUserProfile);

//admin
router.get("/", getUsers);
router.use(verifyIsAdmin);

module.exports = router;
