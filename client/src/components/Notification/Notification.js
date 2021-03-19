import React from "react";

function Notification() {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src="../../../img/dog-01.jpg" alt="" className="circle" />
          <p>2021-03-17</p>
          <span className="title">Cutedog123</span> sent you a bark!
          <p>Respond with a bark if you are interested in meeting up</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <img src="../../../img/dog-02.jpg" alt="" className="circle" />
          <p>2021-03-16</p>
          <span className="title">good_boy</span> sent you a bark!
          <p>Respond with a bark if you are interested in meeting up</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <img src="../../../img/dog-03.jpg" alt="" className="circle" />
          <p>2021-03-13</p>
          <span className="title">Puppylove_91</span> sent you a bark!
          <p>Respond with a bark if you are interested in meeting up</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <img src="../../../img/dog-04.jpg" alt="" className="circle" />
          <p>2021-03-12</p>
          <span className="title">woofy102</span> sent you a bark!
          <p>Respond with a bark if you are interested in meeting up</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Notification;
