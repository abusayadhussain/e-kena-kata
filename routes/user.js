const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user");
const { userSIgnUpValidator } = require("../validator");

router.post("/signup", userSIgnUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
