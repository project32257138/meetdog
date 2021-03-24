import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          <Route exact path="/" component={Main} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
