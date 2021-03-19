import React, { useState, useEffect, Component } from 'react';
import "./index.css"
import API from "../../utils/api"



class Swipe extends Component {

    state = {image: process.env.PUBLIC_URL + "/img/dog-05.jpeg"}

    getNextDog = () => {
        return API.getNextDogNoCheck()
        .then(dog => {
            this.setState({image: dog})
        })
    }

    render() {
        return (
            <div class="row">
            <div class="col s12 m12">
            <div class="card">
                <div class="card-image dog-image">
                    <i class="material-icons back">arrow_back_ios</i>
                    <i class="material-icons forward" onClick={this.getNextDog}>arrow_forward_ios</i>
                    <img src={this.state.image}>
                    </img>
                    <span className="card-title dog-name">Boxer</span>
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