const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/match"
router.route("/")
  .get(dogsController.getMatches)

// Matches with "/api/match/:email"
router.route("/:email")
  .get(dogsController.checkMatch)

module.exports = router;
