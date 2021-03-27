import axios from "axios"

export default {

    getNextDog: function (cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/")
            .then(data => {
                console.log(data)
                // this would need to be changed to a call to out db
                return data.data.message
            })
            .then(nextDog => {
                return cb(nextDog)
            })
    },

    getNextDogsNoCheck: function (n, cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/" + n)
            .then(data => {
                console.log(data)
                // this would need to be changed to a call to out db
                return data.data.message
            })
            .then(nextDogs => {
                return cb(nextDogs)
            })
    },


    // Gets all new Dogs
    getNewDogs: function () {
        return axios.get("/api/dogs");
    },

    // Get a dog profile
    getDog: function (id) {
        return axios.get("/api/dogs/" + id);
    },

    // Update dog profile
    saveDogProfile: function (id, data) {
        return axios.put("/api/dogs/" + id,  data);
    }

}

