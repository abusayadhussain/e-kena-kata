const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");
const { userSIgnUpValidator } = require("../validator");

router.post("/signup", userSIgnUpValidator, signup);

module.exports = router;
