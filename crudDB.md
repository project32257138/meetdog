

<!-- Find New dogs by location  -->

// Get the list of likes, and dislike.

db.dogs.findOne({_id: userID})

// Merge the likes, dislike array and userId into an array

db.dogs.find({location: {city: "Toronto"}, _id: {$nin: [likes, dislike, userID]}})


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



