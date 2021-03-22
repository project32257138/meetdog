const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the dogs below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogsDB");

const dogSeed = [
    {
        owner: "Mike",
        email: "test1@gmail.com",
        password: "123456789",
        name: "Fluffy",
        age: 3,
        breed: "Golden Retriever",
        size: "medium",
        gender: "male",
        description: "Friendly",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Toronto"
    },
    {
        owner: "Alex",
        email: "test2@gmail.com",
        password: "123456789",
        name: "Teddy",
        age: 2,
        breed: "French Bulldog",
        size: "small",
        gender: "male",
        description: "Lovable",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Markham"
    },
    {
        owner: "Jess",
        email: "test3@gmail.com",
        password: "123456789",
        name: "Sherpy",
        age: 1,
        breed: "German Sherpherd",
        size: "large",
        gender: "male",
        description: "Friendly",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Markham"
    },
    {
        owner: "Vanessa",
        email: "test4@gmail.com",
        password: "123456789",
        name: "Luna",
        age: 3,
        breed: "Corgi",
        size: "small",
        gender: "female",
        description: "Friendly",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Toronto"
    },
    {
        owner: "Jeff",
        email: "test5@gmail.com",
        password: "123456789",
        name: "DD",
        age: 3,
        breed: "Pomeraian",
        size: "small",
        gender: "female",
        description: "peacefull",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Toronto"
    },
    {
        owner: "Tim",
        email: "test6@gmail.com",
        password: "123456789",
        name: "Coco",
        age: 6,
        breed: "Chiwawa",
        size: "small",
        gender: "male",
        description: "playfull",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
        location: "Toronto"
    },
    {
        owner: "Tina",
        email: "test7@gmail.com",
        password: "123456789",
        name: "Lullu",
        age: 5,
        breed: "Husky",
        size: "medium",
        gender: "female",
        description: "agressive",
        image: "img.png",
        dislikes: [],
        likes: [],
        matches: [],
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

