import axios from "axios"

let dogList = [] 
let dogIndex = 0

const API = {
    
    getNextDogNoCheck: async function() {
        axios.get("https://dog.ceo/api/breeds/image/random/")
        .then(data => {
            console.log(data)
            return data.data.message
        })
        .then(nextDog => {
            console.log(nextDog)
            return nextDog
        })
    },

    // getNextDogs(n) {
    //     while (dogList.length < n + dogIndex) {
    //         axios.get("https://dog.ceo/api/breeds/image/random/")
    //         .then(data => data.data.message)
    //         .then(nextDog => {
    //             if (!dogList.includes(nextDog)) dogList.push(nextDog)
    //             return dogList
    //         })
    //     } return dogList
    // },

    // async getNextDog() {

    //     if (dogIndex === 0) return API.getNextDogsNoCheck(10)
    //     else if (dogIndex > dogList.length) {
    //         API.getNextDogs(5)
    //     console.log(dogList,dogIndex)
    //     let dog = dogList[dogIndex]
    //     dogIndex++
    //     return dog
    //     }
    // }

}

export default API