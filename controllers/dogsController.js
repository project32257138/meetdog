const db = require("../models");

// Defining methods for the dogsController
module.exports = {

    // This method takes a city name and an array of users to exclude from the search
    // findAll: function (req, res) {
    //     db.Dog.find({ location: req.params.city, _id: { $nin: filterArray } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findAllNew: function (req, res) {
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



    // This method takes an array of Matches ID and return a list of users. 
    // findMatches: function (req, res) {
    //     db.dogs.find({ _id: { $in: req.params.matches } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // Get a single new profile from DB
    getOneNewDog: function (req, res) {
        // Get the current logged profile
        db.Dog.find({ _id: req.params.id }, {_id: 0, likes: 1})
            .then(loggedDog => {
                // Get the array with the key (others profile ids) from likes property
                let filterArray = Object.getOwnPropertyNames(loggedDog.likes)

                // Push user id into filterArray 
                const filterList = filterArray.push(req.params.id)

                // Get one new profile
                db.Dog.find({ _id: { $nin: filterList } }).limit(1).skip(0)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
            })
            .catch(err => res.status(422).json(err))
    },


    // Get an array of 10 new profile from DB
    getTenNewDog: function (req, res) {
        // Get the current logged profile
        db.Dog.find({ _id: req.params.id }, {_id: 0, likes: 1})
            .then(loggedDog => {
                // Get the array with the key (others profile ids) from likes property
                let filterArray = Object.getOwnPropertyNames(loggedDog.likes)

                // Push user id into filterArray 
                const filterArray = filterArray.push(req.params.id)

                // Get one new profile
                db.Dog.find({ _id: { $nin: filterArray } }).limit(10)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
            })
            .catch(err => res.status(422).json(err))
    },

    // Add swiped profile id into logged user likes field on DB
    updateLikes: function (req, res) {
        const keyName = `likes.${req.body.id}`;
        const profileObj = {
            [keyName]: req.body.value
        }
        
        db.Dog
        .findOneAndUpdate({ _id: req.params.id }, profileObj)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },



    // This Method takes an id and update a document from collection
    update: function (req, res) {
        db.Dog
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Check if a profile was liked back
    checkMatch: function (req, res) {
        db.Dog
            .findOne({ _id: req.body.id })
            .then(dbModel => {
                // Check if the the user swiped logged user
                if (dbModel.likes.hasOwnProperty(req.params.id)){
                    // Check if logged user was liked as well 
                    if(dbModel.likes[req.params.id] === true){
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
    },

    getMatches: function (req, res) {
        // Get the current logged profile
        db.Dog.find({ _id: req.params.id }, {_id: 0, likes: 1})
            .then(loggedDog => {
                let filterArray = ["ij"]

               
                db.Dog.find({ _id: { $in: filterArray } })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
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
