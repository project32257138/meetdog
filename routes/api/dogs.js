const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/dogs"
router.route("/")
  .get(dogsController.getTenNewDogs)

// Matches with "/api/dogs/:email"
router.route("/:email")
  .put(dogsController.updateLikes)

router.route("/all")
  .get(dogsController.findAllNew)


module.exports = router;
