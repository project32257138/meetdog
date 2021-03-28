import React from "react";
import "./index.css"

function Notification(props) {
  return (
    <div style={{height: "100%"}}>
      {props.matches.length?
      <ul className="collection">
        {props.matches.map(match => (
          <li key={match.id} className="collection-item avatar">
            <img src={match.image} alt="" className="circle" />
            <p>{match.date}</p>
            <span className="title">{match.name}</span> sent you a bark!
            <p>Respond with a bark if you are interested in meeting up</p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
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
