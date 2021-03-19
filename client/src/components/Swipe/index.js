import React, { useState, useEffect, Component } from 'react';
import "./index.css"
import API from "../../utils/api"

class Swipe extends Component {

    state = {
        currentDog: {
            image: process.env.PUBLIC_URL + "/img/dog-05.jpeg",
            name: "Doge"
        },
        dogList: [] ,
        dogIndex: 0,
    }

    componentDidMount() {
        API.getNextDogsNoCheck(10,(dogs) => {
            this.setState({dogList : dogs})
            debugger;       
        })
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
                    // only decreases n if there is no match
                    n--
                }
                return this.getNextDogs(n,cb,list)
            })
        } else return cb(list)
    }

    getNextDog = () => {
        console.log(this.state.dogIndex, this.state.dogList.length)
        if (this.state.dogIndex + 3 === this.state.dogList.length) {
            this.getNextDogs(5,(dogs) => {
                console.log(this.state.dogList,dogs)
                this.setState({
                    dogList: [...this.state.dogList,...dogs]
                })
                console.log(dogs) 
            })
        } 
        this.setState({ 
            currentDog: {
                image: this.state.dogList[this.state.dogIndex],
                name: "Lucky"+this.state.dogIndex,
                },
            dogIndex: this.state.dogIndex + 1
        })
        console.log(this.state)
    }
 
    render() {
        return (
            <div class="row">
            <div class="col s12 m12">
            <div class="card">
                <div class="card-image dog-image">
                    <i class="material-icons back">arrow_back_ios</i>
                    <i class="material-icons forward" onClick={this.getNextDog}>arrow_forward_ios</i>
                    <img src={this.state.currentDog.image}>
                    </img>
                    <span className="card-title dog-name">{this.state.currentDog.name}</span>
                </div>
                <div className="card-action bark-back">
                <a href="#"><span className="material-icons like">thumb_up</span></a>
                <a href="#"><span className="material-icons dislike">thumb_down</span></a>
                </div>
            </div>
            </div>
        </div>
        )
    }
} 

export default Swipe