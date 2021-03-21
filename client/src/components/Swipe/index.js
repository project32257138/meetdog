import React, { useState, useEffect, Component } from 'react';
import "./index.css"
import API from "../../Utils/api"

class Swipe extends Component {

    state = {
        currentDog: {
            image: process.env.PUBLIC_URL + "/img/dog-05.jpeg",
            name: "Doge",
            id: 0,
        },
        dogList: [],
        dogIndex: -1,
        // lastRatedIndex: -1,
        liked: {
            // object storing id and if that dog was liked by the user
            0: true
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
                currentDog: {
                    image: this.state.dogList[this.state.dogIndex],
                    name: "Lucky"+this.state.dogIndex,
                    id: this.state.dogList[this.state.dogIndex]
                }
            })
        }
    }

    getNextDogs(n,cb,list=[]) {
        console.log(this.state.dogList.length, this.state.dogIndex)
        // couldn't do a loop with callbacks, so I had to do this (a.k.a recursion)
        // n will descrease each time a new dog populates
        if (n) {
            API.getNextDog((nextDog) => {
                console.log(this.state.dogList.includes(nextDog))
                if (!this.state.dogList.includes(nextDog)) {
                    list.push(nextDog)
                    console.log(list)
                    console.log(n)
                    // only decreases n if array does not include nextDog
                    n--
                }
                return this.getNextDogs(n,cb,list)
            })
        } else return cb(list)
    }

    getNextDog = () => {
        let dogsToLoadAtOnce = 10
        let buffer = 5
        console.log(this.state.dogIndex, this.state.dogList.length)
        // this.state.dogIndex + 3 > this.state.dogList.length && 
        if (this.state.dogList.length - buffer < this.state.dogIndex && this.state.dogList.length - buffer < this.state.dogIndex + dogsToLoadAtOnce) {
            this.getNextDogs(dogsToLoadAtOnce,(dogs) => {
                console.log(this.state.dogList,dogs)
                this.setState({
                    dogList: [...this.state.dogList,...dogs]
                })
                console.log("dogs",dogs) 
            })
        } 
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
        this.setState({liked: {[this.state.currentDog.id]: true}})
        // if (!this.state.liked.hasOwnProperty(this.state.currentDog.id)) this.setState({lastRatedIndex: this.state.lastRatedIndex + 1})
        this.getNextDog()
    }

    dislikeDog = () => {
        // obviously this would later store the dogs id not their image
        // this.setState({dislikedDogs: [this.state.currentDog.image,...this.state.dislikedDogs]})
        // if (!this.state.liked.hasOwnProperty(this.state.currentDog.id)) this.setState({lastRatedIndex: this.state.lastRatedIndex + 1})
        this.setState({liked: {[this.state.currentDog.id]: false}})
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
 
    render() {
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
                <a href="#"><span className="material-icons like" onClick={this.likeDog}>thumb_up</span></a>
                </div>
            </div>
            </div>
        </div>
        )
    }
} 

export default Swipe