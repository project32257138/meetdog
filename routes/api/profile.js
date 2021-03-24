const router = require("express").Router();
const dogsController = require ("../../controllers/dogsController");

router.route("/")
.post(dogsController.create)
.get(dogsController.findById);


module.exports = router;