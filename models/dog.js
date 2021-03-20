const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    // Store the name of the dog's owner
    owner: { type: String, trim: true, default: ""},

    // Store the owner's email address
    email: { type: String, trim: true, required: true },

    // Store the owner's password
    password: { type: String, trim: true, required: true },

    // Store the dog's name
    name: { type: String, trim: true, required: true, default: "" },

    // Store the dog's age
    age: { type: Number, required: true, default: 1 },

    // Store the dog's breed
    breed: { type: String, trim: true, required: true, default: "" },

    // Store the dog's size
    size: Number,

    // Store the dog's gender
    gender: { type: String, trim: true, default: ""},

    // Store the dog's description
    description: { type: String, trim: true, default: "" },

    // Store the dog's picture
    image: { type: String, trim: true, default: "" },

    // Store the dog's matches
    matches: { type: Array, default: [] },

    // Store the dog's location
    location: { type: Object, required: true, default: {}},

    // Store the profile is created
     date: { type: Date, default: Date.now }

});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
