const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the dogs below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dogsDB");

const imgArray = [
    "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_630.jpg",
    "https://images.dog.ceo/breeds/germanshepherd/n02106662_24768.jpg",
    "https://images.dog.ceo/breeds/leonberg/n02111129_1670.jpg",
    "https://images.dog.ceo/breeds/hound-blood/n02088466_9691.jpg",
    "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_12801.jpg",
    "https://images.dog.ceo/breeds/frise-bichon/3.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_3947.jpg",
    "https://images.dog.ceo/breeds/puggle/IMG_104450.jpg",
    "https://images.dog.ceo/breeds/bulldog-french/n02108915_3382.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_5648.jpg",
    "https://images.dog.ceo/breeds/maltese/n02085936_5789.jpg",
    "https://images.dog.ceo/breeds/clumber/n02101556_6603.jpg",
    "https://images.dog.ceo/breeds/pembroke/n02113023_4310.jpg",
    "https://images.dog.ceo/breeds/terrier-dandie/n02096437_1143.jpg",
    "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_940.jpg",
    "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_15602.jpg",
    "https://images.dog.ceo/breeds/germanshepherd/n02106662_26335.jpg",
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_9197.jpg",
    "https://images.dog.ceo/breeds/pointer-german/n02100236_485.jpg",
    "https://images.dog.ceo/breeds/samoyed/n02111889_13924.jpg"
]

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
        // image: "img.png",
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
        // image: "img.png",
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
        // image: "img.png",
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
        // image: "img.png",
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
        // image: "img.png",
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
        // image: "img.png",
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
        description: "Aggressive",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test11@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "George",
        age: 3,
        breed: "Golden Retriever",
        size: "Medium",
        gender: "Male",
        description: "Friendly",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test12@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Bear",
        age: 2,
        breed: "French Bulldog",
        size: "Small",
        gender: "Male",
        description: "Lovable",
        // image: "img.png",
        likes: {},
        location: "Markham"
    },
    {
        email: "test13@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Lucky",
        age: 1,
        breed: "German Sherpherd",
        size: "Large",
        gender: "Male",
        description: "Friendly",
        // image: "img.png",
        likes: {},
        location: "Markham"
    },
    {
        email: "test14@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Betsy",
        age: 3,
        breed: "Corgi",
        size: "Small",
        gender: "Female",
        description: "Friendly",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test15@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Patricia",
        age: 3,
        breed: "Pomeraian",
        size: "Small",
        gender: "Female",
        description: "Peacefull",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test16@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Larry",
        age: 6,
        breed: "Chiwawa",
        size: "Small",
        gender: "Male",
        description: "playfull",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    },
    {
        email: "test17@gmail.com",
        password: "123456789",
        email_verified: true,
        name: "Mina",
        age: 5,
        breed: "Husky",
        size: "Medium",
        gender: "Female",
        description: "Aggressive",
        // image: "img.png",
        likes: {},
        location: "Toronto"
    }
];

dogSeed.map((dog,i) => dog.image = imgArray[i])

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

