const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the dogs below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogsDB");

const dogSeed = [
    {
        email: "test1@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "",
        age: "",
        breed: "",
        size: "What's their size?",
        gender: "What's their gender?",
        description: "",
        image: "../../../img/dog-icon.png",
        likes: {},
        location: "",
        fav_park: ""
    },
    {
        email: "test2@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "",
        age: "",
        breed: "",
        size: "What's their size?",
        gender: "What's their gender?",
        description: "",
        image: "../../../img/dog-icon.png",
        likes: {},
        location: "",
        fav_park: ""
    },
    {
        email: "test3@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "",
        age: "",
        breed: "",
        size: "What's their size?",
        gender: "What's their gender?",
        description: "",
        image: "../../../img/dog-icon.png",
        likes: {},
        location: "",
        fav_park: ""
    },
    {
        email: "test4@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "",
        age: "",
        breed: "",
        size: "What's their size?",
        gender: "What's their gender?",
        description: "",
        image: "../../../img/dog-icon.png",
        likes: {},
        location: "",
        fav_park: ""
    }
];



db.Dog.remove({})
    .then(() => db.Dog.collection.insertMany(dogSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

