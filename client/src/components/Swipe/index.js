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
        // console.log(this.props)
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
        currentMatchName: "",
        currentDog: {
            image: "../../../img/loading.svg",
            name: "Loading",
            id: 0,
            liked: {
            }
        },
        dogList: [],
        dogIndex: 0,
        liked: {
            // object storing id and if that dog was liked by the user
            // id: true,  for liked --or--
            // id: false, for disliked
        }
    }

    componentDidMount() {

        const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
        const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY
        
        window.OneSignal = window.OneSignal || [];
        const OneSignal = window.OneSignal;

        OneSignal.init(
            {
              appId: OSID,
              // requiresUserPrivacyConsent: true,
              promptOptions: {
                slidedown: {
                  enabled: true,
                  actionMessage: "We'd like to notify you of matches for new play dates for you.",
                  acceptButtonText: "Yes!",
                  cancelButtonText: "Maybe later.",
              } 
            },
            welcomeNotification: {
              "title": "Puppy Love | Creating New Play Dates",
              "message": "Thanks for subscribing!",
            } 
          });

        API.getNextDogsNoCheck(20,(dogs) => {
            // console.log(dogs)
            this.setState({dogList : dogs})
            this.setState({currentDog: dogs[this.state.dogIndex]})

        })
        // console.log(this.state.dogList)
    }


    // componentDidMount() {
    //     console.log("component did mount")
    //     API.getNextDogsNoCheck(10,(dogs) => {
    //         this.setState({dogList : dogs})
    //     })
    // }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state)
        console.log(prevState.currentDog.liked[this.state.id],this.state.liked[prevState.currentDog.id] )
        // if (this.state.dogIndex !== prevState.dogIndex) {
        this.setState({
            // currentDog: this.state.dogList[this.state.dogIndex],
            currentMatch: (prevState.currentDog.liked[this.state.id] && this.state.liked[prevState.currentDog.id]),
            currentMatchName: (prevState.currentDog.name)
            // && this.state.liked[prevState.currentDog.id]
        })
            // console.log(this.state.currentMatch, prevState.currentDog.name)

        // }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.currentDog !== nextState.currentDog
    }


    getNextDog = () => {
        // console.log(this.state.dogIndex, this.state.dogList.length)
        // this.setState({ 
        //     currentMatch: this.state.dogList[this.state.dogIndex]
        // })
        this.setState({
            dogIndex: this.state.dogIndex + 1,
            currentDog: this.state.dogList[this.state.dogIndex],
        })
        console.log(this.state.currentMatch, this.state.currentDog.name, this.state.currentDog.liked)
    }

    getPreviousDog = () => {
        // console.log(this.state.dogIndex, this.state.currentDog)
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
        this.setState({
            liked: {[this.state.currentDog.id]: true, ...this.state.liked},
            // currentMatch: this.state.currentDog.liked[this.state.id] === this.state.liked[this.state.currentDog.id] 
            // && this.state.currentDog.liked[this.state.id] === true
        })
        
        // console.log(this.state.currentDog.liked[this.state.id])
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
 
    render() {
        return (
            <div className="row">
            <Push
                match={this.state.currentMatch}
                dog={this.state.currentMatchName}
            />
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
                    thisDog={this.state.currentMatchName}
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