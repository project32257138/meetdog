import axios from "axios"

const API = {
    
    getNextDog: function(cb) {
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

    getNextDogsNoCheck: function(n,cb) {
        axios.get("https://dog.ceo/api/breeds/image/random/" + n)
        .then(data => {
            console.log(data)
            // this would need to be changed to a call to out db
            return data.data.message
        })
        .then(nextDogs => {
            return cb(nextDogs)
        })
    }

}

export default API