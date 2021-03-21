import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Main from "./pages/Main/Main";
import Welcome from "./pages/Welcome/Welcome";
import Profile from "./pages/Profile";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          {/* <Route exact path="/" component={Splash} /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/welcome" component={Welcome} /> */}
          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
