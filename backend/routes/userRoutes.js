const express = require("express");
const { getUsers, registerUsers,loginUsers } = require("../controllers/userController");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("Handling product routes, e.g. search for products")
// })

router.post("/register", registerUsers);
router.post("/login", loginUsers);

//admin
router.get("/", getUsers);

module.exports = router;
