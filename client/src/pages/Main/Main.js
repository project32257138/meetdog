import React from "react";
import Notification from "../../components/Notification/Notification";

function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="section">
          <div className="col s6">This is the left side of main page</div>
          <div className="col s6">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
