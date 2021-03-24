import React, { useState, useEffect, Component } from 'react';
import "./index.css"
import API from "../../Utils/api"
import OneSignal, { useOneSignalSetup } from 'react-onesignal';
import execute from "../../send-push"
import { TrustProductsEntityAssignmentsContext } from 'twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEntityAssignments';
// import { addToMatches } from '../../../../controllers/dogsController';

class Swipe extends Component {

    state = {
        id: 1,
        name: "Spot",
        email: "spotty@gmail.com",
        currentMatch: false,
        currentDog: {
            image: process.env.PUBLIC_URL + "/img/dog-05.jpeg",
            name: "Doge",
            id: 0,
            email: "natasha.fray9@gmail.com",
            liked: {
                1: true,
                2: true,
                3: true,
                4: true
            }
        },
        dogList: [],
        dogIndex: -1,
        // lastRatedIndex: -1,
        liked: {
            // object storing id and if that dog was liked by the user
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
            // {id: true}  for liked --or--
            // {id: false} for disliked
        }
    }

    componentDidMount() {
        API.getNextDogsNoCheck(10,(dogs) => {
            this.setState({dogList : dogs})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.dogIndex !== prevState.dogIndex) {
            this.setState({
                currentDog:
                    this.state.dogList[this.state.dogIndex]
                    // name: "Lucky"+this.state.dogIndex,
                    // id: this.state.dogList[this.state.dogIndex],
                    // liked: this.state.dogList[this.state.dogIndex]
            })
        }
    }

    // getNextDogs(n,cb,list=[]) {
    //     console.log(this.state.dogList.length, this.state.dogIndex)
    //     // couldn't do a loop with callbacks, so I had to do this (a.k.a recursion)
    //     // n will descrease each time a new dog populates
    //     if (n) {
    //         API.getNextDog((nextDog) => {
    //             console.log(this.state.dogList.includes(nextDog.id))
    //             if (!this.state.dogList.includes(nextDog.id)) {
    //                 list.push(nextDog.id)
    //                 console.log(list)
    //                 console.log(n)
    //                 // only decreases n if array does not include nextDog
    //                 n--
    //             }
    //             return this.getNextDogs(n,cb,list)
    //         })
    //     } else return cb(list)
    // }

    getNextDog = () => {
        // let dogsToLoadAtOnce = 10
        // let buffer = 3
        console.log(this.state.dogIndex, this.state.dogList.length)
        // this.state.dogIndex + 3 > this.state.dogList.length && 
        // if (this.state.dogList.length - buffer < this.state.dogIndex && this.state.dogList.length - buffer< this.state.dogIndex + dogsToLoadAtOnce) {
        //     this.getNextDogs(dogsToLoadAtOnce,(dogs) => {
        //         console.log(this.state.dogList,dogs)
        //         this.setState({
        //             dogList: [...this.state.dogList,...dogs]
        //         })
        //         console.log("dogs",dogs) 
        //     })
        // } 
        this.setState({ 
            dogIndex: this.state.dogIndex + 1
        })
        console.log(this.state)
    }

    getPreviousDog = () => {
        console.log(this.state.dogIndex, this.state.currentDog)
        this.setState({
            dogIndex: this.state.dogIndex - 1,
        })
    }

    likeDog = () => {
        // obviously this would later store the dogs id not their image
        // this.setState({likedDogs: [this.state.currentDog.image,...this.state.likedDogs]})
        this.setState({liked: {[this.state.currentDog.id]: true, ...this.state.liked}})
        // if (!this.state.liked.hasOwnProperty(this.state.currentDog.id)) this.setState({lastRatedIndex: this.state.lastRatedIndex + 1})
        if (this.state.currentDog.liked[this.state.id] === true) {
            console.log("match!!!!!")
            this.setState({currentMatch: true})
        } else {
            this.setState({currentMatch: false})
        }
        this.getNextDog()
    }

    dislikeDog = () => {
        // obviously this would later store the dogs id not their image
        // this.setState({dislikedDogs: [this.state.currentDog.image,...this.state.dislikedDogs]})
        // if (!this.state.liked.hasOwnProperty(this.state.currentDog.id)) this.setState({lastRatedIndex: this.state.lastRatedIndex + 1})
        this.setState({liked: {[this.state.currentDog.id]: false, ...this.state.liked}, currentMatch: false})
        this.getNextDog()
    }

    // disabled for now
    // showNextBtn = () => {
    //     // console.log(this.state, this.state.liked.hasOwnProperty(this.state.currentDog.id),this.state.currentDog.id)
    //     if (this.state.dogIndex <= this.state.lastRatedIndex) return (
    //         <i className="material-icons forward" onClick={this.getNextDog}>arrow_forward_ios</i>
    //     )
    // }

    // showPrevBtn = () => {
    //     if (this.state.dogIndex > 0) return (
    //         <i className="material-icons back" onClick={this.getPreviousDog}>arrow_back_ios</i>
    //     )
    // }

    showMatch = () => {
        if (this.state.currentMatch > 0) {
            return (
            <div>Match!!!</div>
        )} else return ""
    }
 
    render() {
        // execute(() => {
        //     const user = this.state.currentDog;
        //     OneSignal.setEmail(user.email);
        //     OneSignal.setExternalUserId(user.id);
        //     OneSignal.getEmailId().then(id => console.log(id))
        //   })
        return (
            <div className="row">
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image dog-image">
                    <img src={this.state.currentDog.image}>
                    </img>
                    <span className="card-title dog-name">{this.state.currentDog.name}</span>
                </div>
                <div className="card-action bark-back">
                {/* {this.showPrevBtn()}
                {this.showNextBtn()} */}
                <a href="#"><span className="material-icons dislike" onClick={this.dislikeDog}>thumb_down</span></a>
                {this.showMatch()}
                <a href="#"><span className="material-icons like" onClick={this.likeDog}>thumb_up</span></a>
                </div>
            </div>
            
            </div>
        </div>
        )
    }
} 

export default Swipe