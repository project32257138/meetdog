import axios from "axios"
const qs = require('qs');


let setId = 0;

const swapIndexes = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}

const getRandomNonRepeating = (n) => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let rdm;
    for (let i = (n - 1); i >= 0; i--) {
        rdm = Math.floor(Math.random() * (i))
        swapIndexes(arr, i, rdm)
    }
    return arr
}

const API = {

    getNextDog: function (cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/")
            .then(data => {
                console.log(data)
                // this would need to be changed to a call to out db
                return data.data.message
            })
            .then(nextDog => cb(nextDog)
            )
    },

    // got rid of this because the API call doesn't really work and its just for testing
    // getNextDogsNoCheck: function(n,cb) {
    //     axios.get("https://dog.ceo/api/breeds/image/random/" + n)
    //     .then(data => {
    //         console.log(data)
    //         // this would need to be changed to a call to out db
    //         return data.data.message
    //     })
    //     .then(nextDogs => {
    //         return cb(nextDogs)
    //     })
    // },

    getNextDogsNoCheck: function (n, cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/" + n)
            .then(data => {
                console.log(data)
                // this would need to be changed to a call to out db
                return data.data.message
            })
            .then(nextDogImgs => {
                let nextDogs = nextDogImgs.map((nextDogImg, i) => {
                    let likeID = getRandomNonRepeating(10)
                    return {
                        id: ++setId,
                        image: nextDogImg,
                        email: "lucky" + setId + "@doggymail.com",
                        name: "lucky" + setId,
                        liked: {
                            [likeID[0]]: !!Math.floor(Math.random() * 4),
                            [likeID[1]]: !!Math.floor(Math.random() * 4),
                            [likeID[2]]: !!Math.floor(Math.random() * 4),
                            [likeID[3]]: !!Math.floor(Math.random() * 4),
                            [likeID[4]]: !!Math.floor(Math.random() * 4)
                        }
                    }
                })
                return cb(nextDogs)
            })
    },

    // Gets all  Dogs
    // getAllDogs: function () {
    //     return axios.get("/api/dogs/");
    // },

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
