const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

const dogSchema = new Schema({
    // Store the name of the dog's owner
    owner: { type: String, default: '' },

    // Store the owner's email address
    email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },

    // Store the owner's password
    password: { type: String, required: true },

    // Store the dog's name
    name: { type: String, default: "" },

    // Store the dog's age
    age: { type: Number, default: 1 },

    // Store the dog's breed
    breed: { type: String, default: "" },

    // Store the dog's size
    size: { type: String, enum: ['small', 'medium', 'large'] },

    // Store the dog's gender
    gender: { type: String, enum: ['male', 'female'] },

    // Store the dog's description
    description: { type: String, default: "" },

    // Store the dog's picture
    image: { type: String, default: "" },

    // Store the id of dogs that were disliked
    dislikes: { type: Array, default: [] },

    // Store the id of dogs that were liked
    likes: { type: Array, default: [] },

    // Store id of dogs that were matched
    matches: { type: Array, default: [] },

    // Store the dog's location
    location: { type: String, default: "" },
});


const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
