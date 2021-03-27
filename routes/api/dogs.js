const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/dogs"
router.route("/")
  .get(dogsController.findAllNew)

// Matches with "/api/dogs/:id"
router
  .route("/:id")
  .get(dogsController.findById)
  .put(dogsController.update)

// Get the current logged user id
router
    .route("/currentuser/:email")
    .get(dogsController.findUserId)

//   .delete(dogsController.remove);  // Missing

// Matches with "/api/dogs/newdog/:id"
router 
  .route("/newdog/:id")
  .get(dogsController.getOneNewDog)


// Matches with "/api/dogs/newdogs/:id"
router 
  .route("/newdogs/:id")
  .get(dogsController.getTenNewDog)

// Matches with "/api/dogs/swipe/:id"
router 
  .route("/swipe/:id")
  .put(dogsController.updateLikes)

// Matches with "/api/dogs/check/:id"
router 
  .route("/check/:id")
  .get(dogsController.checkMatch)

// Matches with "/api/dogs/matches/:id"
router 
  .route("/matches/:id")
  .get(dogsController.getMatches)


module.exports = router;
