

<!-- Find New dogs by location  -->

// Get the list of likes, and dislike.

db.dogs.findOne({_id: userID})

// Merge the likes, dislike array and userId into an array

db.dogs.find({location: {city: "Toronto"}, _id: {$nin: [likes, dislike, userID]}})


<!-- Create Empty Profile  -->
db.dogs.insert({
    email: "test10@gmail.com",
        password: "123456789",
        email_verified: true
})


<!-- Update User Profile by email -->
db.dogs.update({"email": "test10@gmail.com"}, {$set: {
      name: "Fluffy",
        age: 3,
        breed: "Golden Retriever",
        size: "Medium",
        gender: "Male",
        description: "Friendly",
        image: "../../../img/dog-05.jpeg",
        likes: {},
        location: "Toronto"
    }})




<!-- Like another Profile -->

// Push liked user id to the likes field
db.dogs.findOneAndUpdate ({_id: userID}, {$push: {likes: likedUserID} })


<!-- Dislike another Profile -->

// Push liked user id to the likes field
db.dogs.findOneAndUpdate ({_id: userID}, {$push: {dislikes: likedUserID} })

<!-- Update matches array -->
// Get the list of likes from liked user
db.dogs.findOne({_id: likedUserID})

// Check userID is in array of likes from liked user

// Update matches array for both users
db.dogs.findOneAndUpdate ({_id: userID}, {$push: {matches: likedUserID} })

db.dogs.findOneAndUpdate ({_id: likedUserID}, {$push: {matches: userID} })

<!-- Find Matches -->

// Get the matches array
db.dogs.findOne({_id: userID})

db.dogs.find({ _id: {$in: [matches]}})



