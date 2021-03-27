const db = require("../models");

// Defining methods for the dogsController
module.exports = {
   
    // This method takes a city name and an array of users to exclude from the search
    // findAll: function (req, res) {
    //     db.Dog.find({ location: req.params.city, _id: { $nin: filterArray } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findAllNew: function(req, res) {
        db.Dog
          .find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },


    // This method takes a id and return a document from the collection
    findById: function (req, res) {
        db.Dog.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // This method add user id into the likes array
    // likeDog: function (req, res) {
    //     db.Dog.findOneAndUpdate({ _id: req.params.id }, { $push: { likes: req.params.likedId } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // This method takes 2 id (userID1 and userID2) into the dislikes array
    // addToMatches: function (req, res) {
    //     db.dogs.findOneAndUpdate({ _id: req.params.userID1 }, { $push: { matches: req.params.userID2 } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // This method takes an array of Matches ID and return a list of users. 
    // findMatches: function (req, res) {
    //     db.dogs.find({ _id: { $in: req.params.matches } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // This Method takes an id and update a document from collection
    update: function(req, res) {
        db.Dog
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    // This method takes an id and remove a document from collection
    remove: function (req, res) {
        db.Dog.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
