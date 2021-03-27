const router = require("express").Router();
const dogRoutes = require("./dogs");

// Dog routes
router.use("/dogs", dogRoutes);

module.exports = router;
