import React, { useState, useEffect, Component } from 'react';
import "./index.css"
// import API from "../../Utils/api"
import Push from "./../../send-push.js"
import { useHistory } from 'react-router';
import mongoose from "mongoose"

// import { TrustProductsEntityAssignmentsContext } from 'twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEntityAssignments';

class ShowMatch extends Component {

    render() {
        if (this.props.match) {
            return (
                <div>You matched with {this.props.thisDog}</div>
            )
        } else return ""
    }
}

const Swipe = (props) => {
        return (
            <div className="row">
            <Push
                match={props.details.currentMatch}
                dog={props.details.matches[props.details.matches.length - 1]?.name}
            />
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image dog-image">
                    <img src={props.details.currentDog?.image || "./img/surprised.jpeg"}>
                    </img>
                    <span className="card-title dog-name">{props.details.currentDog?.name || "Oops, looks like you've seen them all!"}</span>
                </div>
                <div className="card-action bark-back">
                <a href="#"><span className="material-icons dislike" onClick={props.dislikeDog}>{props.details.currentDog?.id? "thumb_down" : ""}</span></a>
                <ShowMatch
                    match={props.details.currentMatch}
                    thisDog={props.details.matches[props.details.matches.length - 1]?.name}
                />
                <a href="#"><span className="material-icons like" onClick={props.likeDog}>{props.details.currentDog?.id? "thumb_up" : ""}</span></a>
                </div>
            </div>
            
            </div>
        </div>
        )
    // }
} 

export default Swipe