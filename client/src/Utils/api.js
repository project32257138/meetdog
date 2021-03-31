import axios from "axios"
const qs = require('qs');

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}

const randomizeArray = (arr) => {
    let rdm
    for (let i = (arr.length - 1); i >= 0; i--) {
        rdm = Math.floor(Math.random() * (i))
        swap(arr,i,rdm)
    }
    return arr
}

const API = {

    assign: function(likeID, email){
        let likes = {}
        likeID.map(like => {
            console.log(like)
            let liked = !!(Math.floor(Math.random() * 2))
            this.likeOrDislike(email, {id: like, value: liked})
            likes[like] = liked
        })
        console.log(likes)
        return likes
    },   

    getNextDogs: function(email,cb) {
        console.log(email)
        this.getNewDogs({email: email})
        .then(data => {
            return data.data
        })
        .then(nextDogs => {
                let nextDogsList = nextDogs.map(nextDog => {
                    return {
                        _id: nextDog._id,
                        image: nextDog.image,
                        email: nextDog.email,
                        name: nextDog.name,
                        likes: nextDog.likes || {},
                        description: nextDog.description,
                        age: nextDog.age,
                        breed: nextDog.breed
                    }
                })
                return cb(randomizeArray(nextDogsList))
        })
    },

    getAllDogs: function() {
        return axios.get("/api/dogs/all")
    },

    getDogIds: function() {
        return axios.get("/api/dogs/ids")
    },

    // Get a dog profile
    getDog: function (id) {
       return axios.get("/api/dogs/" + id)
    },

    // # Get a dog profile by email
    getDog: function (email) {
        return axios.get("/api/dog/" + email);
    },

    // # Update dog profile
    saveDogProfile: function (email, data) {
        return axios.put("/api/dog/" + email, data);
    },

    // # Get a new dogs profiles
    // Pass an object with [key] = email and value = current user email
    // This returns max 10 new profiles
    // Example: {
            //   email: "test@hotmail.com"
            // }
    getNewDog: function (queryObj) {
        return axios.get("/api/dog/", {
            params: queryObj, 
            paramsSerializer: params => {
                return qs.stringify(params)
            }
          });
    },

    // # Get a list of 10 new dogs profiles
    // Pass an object with [key] = email and value = current user email
    // This returns max 10 new profiles
    // Example: {
            //   email: "test64@hotmail.com"
            // }
    getNewDogs: function (queryObj) {
        return axios.get("/api/dogs/", {
            params: queryObj, 
            paramsSerializer: params => {
                return qs.stringify(params)
            }
          });
    },

    // # Add a likes to user profile
    // Pass logged email and obj
    // for likes pass: { id: "2323483", value: true } 
    // and for dislike pass: { id: "2323483", value: false }
    likeOrDislike: function (email, swipedProfile) {
        return axios.put("/api/dogs/" + email, swipedProfile);
    },

    // # Return true / false if two users liked each other
    // Pass current user email and object with email of liked user
    // Example: {
            //   likedEmail: "test12@hotmail.com"
            // }
    checkIfMatch: function (email, dataObj) {
        return axios.get("/api/match/" + email , {
            params: dataObj, 
            paramsSerializer: params => {
                return qs.stringify(params)
            }
          });
    },

    // # Get all the matches of a particular profile
    // Pass an object with [key] = email and value = current user email
    // Example: {
            //   email: "test@hotmail.com"
            // }
    getAllMatches: function (emailObj) {
        return axios.get("/api/match/", {
            params: emailObj, 
            paramsSerializer: params => {
                return qs.stringify(params)
            }
          });
    }

}

export default API;
