const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

// Matches with "/api/dog"
router.route("/")
  .get(dogsController.getOneNewDog)

// Matches with "/api/dog/:email"
router
  .route("/:email")
  .get(dogsController.findByEmail)
  .put(dogsController.update)
  .delete(dogsController.remove)  // Missing Front End button



// Matches with "/api/dogs/newdog/:id"
// router 
//   .route("/newdog/:id")
//   .get(dogsController.getOneNewDog)


// Matches with "/api/dogs/newdogs/"
// router 
//   .route("/dogs/new/")
//   .get(dogsController.getTenNewDogs)

// Matches with "/api/dogs/swipe/:id"
// router 
//   .route("/swipe/:id")
//   .put(dogsController.updateLikes)

// // Matches with "/api/dogs/check/:id"
// router 
//   .route("/check/:id")
//   .get(dogsController.checkMatch)

// // Matches with "/api/dogs/matches/:id"
// router 
//   .route("/matches/:id")
//   .get(dogsController.getMatches)


module.exports = router;
