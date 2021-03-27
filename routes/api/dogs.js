const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/profile"
router.route("/")
  .get(dogsController.findAllNew)

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(dogsController.findById)
  .put(dogsController.update)

//   .delete(dogsController.remove);  // Missing

module.exports = router;
