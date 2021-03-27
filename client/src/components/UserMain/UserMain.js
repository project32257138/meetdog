import React from "react";
import Notification from "../Notification/Notification";
import Swipe from "../Swipe/index";
import Header from "../Header";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";

function UserMain() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="section">
            <div className="col s12 m6">
              <Swipe />
            </div>
            <div className="col s12 m6">
              <Notification 
                matches={[]}              
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(UserMain, {
  onredirecting: () => <Loading />,
});
