import React, { useState, useEffect, Component } from 'react';
import "./index.css"
import API from "../../Utils/api"
import Push from "./../../send-push.js"
import { useHistory } from 'react-router';
// import { TrustProductsEntityAssignmentsContext } from 'twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEntityAssignments';

class ShowMatch extends Component {

    
    // componentDidUpdate(nextProps, nextState) {
    //     console.log(this.props)
    //     return nextProps.match
    // }

    render() {
        console.log(this.props)
        if (this.props.match) {
            return (
                <div>You matched with {this.props.thisDog}</div>
            )
        } else return ""
    }
}



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
                1: false,
                2: false,
                3: false,
                4: false
            }
        },
        dogList: [],
        dogIndex: 0,
        // lastRatedIndex: -1,
        liked: {
            // object storing id and if that dog was liked by the user
            // id: true,  for liked --or--
            // id: false, for disliked
        }
    }

    componentDidMount() {
        console.log("component did mount")
        API.getNextDogsNoCheck(10,(dogs) => {
            this.setState({dogList : dogs})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update")
        console.log(this.state)
        if (this.state.dogIndex !== prevState.dogIndex) {
            this.setState({
                currentDog: this.state.dogList[this.state.dogIndex],
                currentMatch: this.state.currentDog.liked[this.state.id] === this.state.liked[this.state.currentDog.id] &&
                this.state.liked[this.state.currentDog.id] === true
            })
        }
    }

    getNextDog = () => {
        console.log(this.state.dogIndex, this.state.dogList.length)
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
        // if (this.state.currentDog.liked[this.state.id] === true) {
        //     console.log("match!!!!!")
        //     this.setState({currentMatch: true})
        // } else {
        //     this.setState({currentMatch: false})
        // }
        this.setState({liked: {[this.state.currentDog.id]: true, ...this.state.liked}})
        console.log(this.state.currentDog.liked[this.state.id])
        this.getNextDog()
        // return true
    }

    dislikeDog = () => {
        // obviously this would later store the dogs id not their image
        // this.setState({dislikedDogs: [this.state.currentDog.image,...this.state.dislikedDogs]})
        // if (!this.state.liked.hasOwnProperty(this.state.currentDog.id)) this.setState({lastRatedIndex: this.state.lastRatedIndex + 1})
        this.setState({liked: {[this.state.currentDog.id]: false, ...this.state.liked}})
        this.getNextDog()
    }

    // disabled for now
    showNextBtn = () => {
        // console.log(this.state, this.state.liked.hasOwnProperty(this.state.currentDog.id),this.state.currentDog.id)
        if (this.state.currentMatch) return (
            <i className="material-icons forward"  onClick={this.getNextDog}>arrow_forward_ios</i>
        )
    }

    showMatch = () => {
        // console.log(this.state, this.state.liked.hasOwnProperty(this.state.currentDog.id),this.state.currentDog.id)
        if (this.state.currentMatch) return (
            <div>Match!!!</div>
        )
    }

    // showPrevBtn = () => {
    //     if (this.state.dogIndex > 0) return (
    //         <i className="material-icons back" onClick={this.getPreviousDog}>arrow_back_ios</i>
    //     )
    // }

    // showMatch = () => {
    //     if (this.state.currentMatch) {
    //         return (
    //         <div>Match!!!</div>

    //     )} else return ""
    //     // )}
    // }

    // handleMatch = (match) => {
    //     console.log(match)
    //     this.setState({currentMatch: match})
    // }
 
    render() {
        return (
            <div className="row">
            <Push/>
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image dog-image">
                    <img src={this.state.currentDog.image}>
                    </img>
                    <span className="card-title dog-name">{this.state.currentDog.name}</span>
                </div>
                <div className="card-action bark-back">
                {/* {this.showPrevBtn()} */}
                <a href="#"><span className="material-icons dislike" onClick={this.dislikeDog}>thumb_down</span></a>
                {/* {this.showMatch()} */}
                {/* {this.showNextBtn()} */}
                <ShowMatch
                    match={this.state.currentMatch}
                    thisDog={this.state.currentDog.name}
                    // matchChange={this.handleMatch}
                />
                <a href="#"><span className="material-icons like" onClick={this.likeDog}>thumb_up</span></a>
                </div>
            </div>
            
            </div>
        </div>
        )
    }
} 

export default Swipe