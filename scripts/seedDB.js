const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the dogs below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogsDB");

const dogSeed = [
    {
        email: "test1@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Fluffy",
        age: 3,
        breed: "Golden Retriever",
        size: "Medium",
        gender: "Male",
        description: "Friendly",
        image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test2@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Teddy",
        age: 2,
        breed: "French Bulldog",
        size: "Small",
        gender: "Male",
        description: "Lovable",
        image: "img.png",
        likes: {},
        location: "Markham"
    },
    {
        email: "test3@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Sherpy",
        age: 1,
        breed: "German Sherpherd",
        size: "Large",
        gender: "Male",
        description: "Friendly",
        image: "img.png",
        likes: {},
        location: "Markham"
    },
    {
        email: "test4@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Luna",
        age: 3,
        breed: "Corgi",
        size: "Small",
        gender: "Female",
        description: "Friendly",
        image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test5@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "DD",
        age: 3,
        breed: "Pomeraian",
        size: "Small",
        gender: "Female",
        description: "Peacefull",
        image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test6@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Coco",
        age: 6,
        breed: "Chiwawa",
        size: "Small",
        gender: "Male",
        description: "playfull",
        image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test7@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Lullu",
        age: 5,
        breed: "Husky",
        size: "Medium",
        gender: "Female",
        description: "Agressive",
        image: "img.png",
        likes: {},
        location: "Toronto"
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

