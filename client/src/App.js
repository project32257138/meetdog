import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Main from "./pages/Main/Main";
import Welcome from "./pages/Welcome/Welcome";
import Profile from "./pages/Profile";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/home" component={Main} />
                <Route exact path="/welcome" component={Welcome} />
                {/* <Route exact path="/signup" component={Signup} /> */}
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}

export default App;
