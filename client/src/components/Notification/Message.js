import React from "react"

const Message = (props) => {
    return (
        <li className="collection-item avatar">
          <img src={props.currentDog.image} alt="" className="circle" />
          <p>{props.date}</p>
          <span className="title">{props.currentDog.name}</span> sent you a bark!
          <p>Respond with a bark if you are interested in meeting up</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </li>
    )
}

export default Message