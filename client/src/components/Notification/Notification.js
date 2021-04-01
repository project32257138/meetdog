import React, { Component } from "react";
import "./index.css"
import DogSummary from "./DogSummary/DogSummary"

const Notification = (props) => {

    return (
    <div style={{height: "100%"}}>
      {props.matches.length?
      <ul className="collection">
        {props.matches.map((match,i) => (
          <li key={match._id} className="collection-item avatar">
            <img src={match.image} alt="" className="circle" />
            <p>{match.date}</p>
            <span className="title">{match.name}</span> sent you a bark!
            <p>Respond with a bark if you are interested in meeting up</p>
            <DogSummary
              key={match._id}
              match={match}
              index={i}
              onClick={() => this.showDogSummary(i)}
            />
          </li>
        ))}
      </ul> : <NoBarks/>}
    </div>
  );
}
function NoBarks() {
  return (
    <div className="no-barks">
      <p>No barks yet, keep trying.</p>
    </div>
  )
}

export default Notification;
