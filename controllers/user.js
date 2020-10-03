const User = require("../models/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !User) {
      res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};
