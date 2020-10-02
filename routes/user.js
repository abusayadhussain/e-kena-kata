const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/user");
const { userSIgnUpValidator } = require("../validator");

router.post("/signup", userSIgnUpValidator, signup);
router.post("/signin", signin);

module.exports = router;
