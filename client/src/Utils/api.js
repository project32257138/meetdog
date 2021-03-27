import axios from "axios"

let setId = 0;

const swapIndexes = (arr,i,j) => {
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
        swapIndexes(arr,i,rdm)
    }
    return arr
}

const API = {
    
    getNextDog: function(cb) {
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

    getNextDogsNoCheck: function(n,cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/" + n)
        .then(data => {
            console.log(data)
            // this would need to be changed to a call to out db
            return data.data.message
        })
        .then(nextDogImgs => {
            let nextDogs = nextDogImgs.map((nextDogImg,i) => {
                let likeID = getRandomNonRepeating(10)
                return {
                    id: ++setId,
                    image: nextDogImg,
                    email: "lucky" + setId + "@doggymail.com",
                    name: "lucky" + setId,
                    liked: {
                        [likeID[0]] : !!Math.floor(Math.random() * 4),
                        [likeID[1]] : !!Math.floor(Math.random() * 4),
                        [likeID[2]] : !!Math.floor(Math.random() * 4),
                        [likeID[3]] : !!Math.floor(Math.random() * 4),
                        [likeID[4]] : !!Math.floor(Math.random() * 4)
                    }
                }
            })
            return cb(nextDogs)
        })
    },

    // Get a dog profile
    getDog: function (id) {
        return axios.get("/api/dogs/" + id);
    },

    // Update dog profile
    saveDogProfile: function (id, data) {
        return axios.put("/api/dogs/" + id,  data);
    },

     // Gets all new Dogs
    //  getNewDogs: function () {
    //      return axios.get("/api/dogs");
    //  },

    // Get logged profile id and return a single 
    getNewDog: function (id) {
        return axios.get("/api/dogs/newdog/" + id);
    },

    // Get logged profile id and return 10 new profiles 
    getNewDogs: function (id) {
        return axios.get("/api/dogs/newdogs/" + id);
    },

    // Get logged profile id and and obj (for likes pass {id: "2323483", value: true} and for dislike pass {id: "2323483", value: false})
    likeOrDislike: function (id, swipedProfile) {
        return axios.get("/api/dogs/swipe/" + id, swipedProfile);
    },

    // Get logged profile id and and id of the swiped profile {id: "19289234"} and return true / false
    checkIfMatch: function (id, swipedProfileId) {
        return axios.get("/api/dogs/check/" + id, swipedProfileId);
    },

    // No Ready
    // Get all the matches  
    getAllMatches: function (id) {
        return axios.get("/api/dogs/matches/" + id);
    }

}

export default API;
