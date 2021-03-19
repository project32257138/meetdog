import React from "react";
import Notification from "../../components/Notification/Notification";
import Swipe from "../../components/Swipe/index"

function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="section">
          <div className="col s12 m6">
            <Swipe />
          </div>
          <div className="col s12 m6">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
