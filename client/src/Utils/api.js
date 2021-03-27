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
                        [likeID[0]] : !!Math.floor(Math.random() * 10),
                        [likeID[1]] : !!Math.floor(Math.random() * 10),
                        [likeID[2]] : !!Math.floor(Math.random() * 10),
                        [likeID[3]] : !!Math.floor(Math.random() * 10),
                        [likeID[4]] : !!Math.floor(Math.random() * 10)
                    }
                }
            })
            return cb(nextDogs)
        })
    },

    saveDogProfile: function(data) {
        console.log(data);
        return axios.post("/api/profile", data, {
          headers: {
            'content-type': 'application/json'
          }
        });
    },
    
    //get all profile
    getDogProfile: function() {
        return axios.get("/api/profile");
    }    
}

export default API;