var express = require("express");
var router = express.Router();

// /api/user/login
router.post("/login", function (req, res, next) {
  res.send("respond with a resource");
});
// /api/user/register
router.post("/register", function (req, res, next) {
  res.send("respond with a resource");
});
// /api/user/current
router.post("/current", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
