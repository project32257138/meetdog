const router = require("express").Router();
const profileRoutes = require("./profile");

// profiles routes
router.use("/profile", profileRoutes);

module.exports = router;
