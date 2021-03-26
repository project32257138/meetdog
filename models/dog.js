const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

const dogSchema = new Schema({
    // Store the owner's email address
    email: { type: String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },

    // Store the owner's password
    password: { type: String, required: true },

    // Store email verified status
    email_verified: {type: Boolean},

    // Store the dog's name
    name: { type: String, default: "" },

    // Store the dog's age
    age: { type: Number, default: 1 },

    // Store the dog's breed
    breed: { type: String, default: "" },

    // Store the dog's size
    size: { type: String, enum: ['Small', 'Medium', 'Large'] },

    // Store the dog's gender
    gender: { type: String, enum: ['Male', 'Female'] },

    // Store the dog's description
    description: { type: String, default: "" },

    // Store the dog's picture
    image: { type: String, default: "" },

    // Store dogs liked as key(profile id)/ value(boolean)
    likes: { type: Object, default: {} },

    // Store the dog's location
    location: { type: String, default: "" },
});


const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
