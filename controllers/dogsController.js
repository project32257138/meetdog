const db = require("../models");

// Defining methods for the dogsController
module.exports = {

    findAllNew: function (req, res) {
        db.Dog
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // This method takes an email and return a document from the collection
    findByEmail: function (req, res) {
        db.Dog.find({ email: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // This Method takes email and update a document from collection
    update: function (req, res) {
        db.Dog
            .findOneAndUpdate({ email: req.params.email }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Get a single new profile from DB
    getOneNewDog: function (req, res) {
        db.Dog.findOne({ email: req.query.email })
            .then((currentUser) => {
                const filterArray = Object.getOwnPropertyNames(currentUser.likes)
                db.Dog
                    .find({ email: { $ne: req.query.email }, _id: { $nin: filterArray } }).limit(1)
                    .then(dbModel => {
                        res.json(dbModel)
                    })
                    .catch(err => res.status(422).json(err));
            })
    },


    // Get an array of 10 new profile from DB
    getTenNewDogs: function (req, res) {
        db.Dog.findOne({ email: req.query.email })
            .then((currentUser) => {
                const filterArray = Object.getOwnPropertyNames(currentUser.likes)
                db.Dog
                    .find({ email: { $ne: req.query.email }, _id: { $nin: filterArray } }).limit(10)
                    .then(dbModel => {
                        res.json(dbModel)
                    })
                    .catch(err => res.status(422).json(err));
            })
    },

    // Add swiped profile id into logged user likes field on DB
    updateLikes: function (req, res) {
        const keyName = `likes.${req.body.id}`;
        const profileObj = {
            [keyName]: req.body.value
        }

        db.Dog
            .findOneAndUpdate({ email: req.params.email }, profileObj)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Check if a profile was liked back
    checkMatch: function (req, res) {
        db.Dog.findOne({ email: req.params.email })
            .then(resul => {
                db.Dog
                    .findOne({ email: req.query.likedEmail })
                    .then(dbModel => {
                        // Check if the the user swiped logged user
                        if (dbModel.likes.hasOwnProperty(resul.id)) {
                            // Check if logged user was liked as well 
                            if (dbModel.likes[resul.id] === true) {
                                res.json(true);
                            }
                            else {
                                res.json(false);
                            }
                        }
                        else {
                            res.json(false);
                        }
                    })
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));


        // db.Dog
        //     .findOne({ email: req.query.likedEmail })
        //     .then(dbModel => {
        //         // Check if the the user swiped logged user
        //         if (dbModel.likes.hasOwnProperty(req.query.id)) {
        //             // Check if logged user was liked as well 
        //             if (dbModel.likes[req.query.id] === true) {
        //                 res.json(true);
        //             }
        //             else {
        //                 res.json(false);
        //             }
        //         }
        //         else {
        //             res.json(false);
        //         }
        //     })
        //     .catch(err => res.status(422).json(err));
    },

    // Get a list of all matches of the current user
    getMatches: function (req, res) {
        // Get the current logged profile
        db.Dog.findOne({ email: req.query.email }, { _id: 0, likes: 1 })
            .then(loggedDog => {
                const filterArray = Object.getOwnPropertyNames(loggedDog.likes)
                db.Dog.find({ _id: { $in: filterArray } })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err))
            })
            .catch(err => res.status(422).json(err))
    },

    // Return only the user id
    findUserId: function (req, res) {
        db.Dog.find({ email: req.params.email }, { _id: 1 })
            .then(userID => {
                res.json(userID)
            })
            .catch(err => res.status(422).json(err))
    },

    // This method takes an id and remove a document from collection
    remove: function (req, res) {
        db.Dog.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};


    // This method add user id into the likes array
    // likeDog: function (req, res) {
    //     db.Dog.findOneAndUpdate({ _id: req.params.id }, { $push: { likes: req.params.likedId } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },



    // This method takes an array of Matches ID and return a list of users. 
    // findMatches: function (req, res) {
    //     db.dogs.find({ _id: { $in: req.params.matches } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },