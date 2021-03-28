const router = require("express").Router();
const dogRoutes = require("./dog");
const dogsRoutes = require("./dogs");
const matchRoutes = require("./match");


// Dog routes
router.use("/dog", dogRoutes);

// Dogs routes
router.use("/dogs", dogsRoutes);

// Match routes
router.use("/match", matchRoutes);

module.exports = router;
