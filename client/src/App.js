import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Main from "./pages/Main/Main";
import SignUp from "./pages/SignUp";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/home" component={Main} />
                <Route exact path="/signup" component={Signup} />
                {/* <Route exact path="/login" component={Login} /> */}
            </Switch>
        </Router>
    );
}

export default App;
