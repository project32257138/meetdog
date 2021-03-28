import axios from "axios"

let setId = 0;

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}

const getRandomNonRepeating = (n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    let rdm;
    for (let i = (n - 1); i >= 0; i--) {
        rdm = Math.floor(Math.random() * (i))
        swap(arr,i,rdm)
    }
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

const assign = (likeID) => {
    let likes = {}
    likeID.map(like => {
        likes[like] = !(Math.floor(Math.random() * 3))
    })
    return likes
}

const API = {

    getNextDogsNoCheck: function(id,cb) {
        this.getAllDogs(id)
        .then(data => {
            console.log(data.data)
            return {list: data.data, random: randomizeArray(data.data.map(id=>id._id))}
        })
        .then(nextDogs => {
            let nextDogsList = nextDogs.list.map((nextDog,i) => {
                let likeID = nextDogs.random
                return {
                    id: nextDog._id,
                    image: nextDog.image,
                    email: nextDog.email,
                    name: nextDog.name,
                    liked: assign(likeID)
                }
            })
            return cb(randomizeArray(nextDogsList))
        })
    },

    getDogIds: function() {
        return axios.get("/api/dogs/ids")
    },

    // Get a dog profile
    getDog: function (id) {
       return axios.get("/api/dogs/" + id)
    },

    // Get logged user ID by email  
    getLoggedUserByEmail: function (email) {
        return axios.get("/api/dogs/currentuser/" + email);
    },

    // Update dog profile
    saveDogProfile: function (id, data) {
        return axios.put("/api/dogs/" + id,  data);
    },

     // Gets all  Dogs
     getAllDogs: function () {
         return axios.get("/api/dogs/");
     },

    // Get logged profile id and return a single 
    getNewDog: function (id) {
        return axios.get("/api/dogs/newdog/" + id);
    },

    // Get logged profile id and return 10 new profiles 
    getNewDogs: function (id) {
        return axios.get("/api/dogs/newdog" + id);
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
