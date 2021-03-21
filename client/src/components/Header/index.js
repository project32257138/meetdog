import React from "react";
import AuthBtn from "../AuthBtn/AuthBtn"
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <nav id="navbar">
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo" id="nav-logo">
              <img src="../../../img/puppy-love-small.png"></img>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/matches">Matches</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <AuthBtn />
              </li>
            </ul>
          </div>
        </nav>

        <nav id="nav-mobile" className="hide-on-large-only">
          <div className="nav-wrapper">
            <ul>
              <li>
                <a href="/home">
                  <i class="material-icons">home</i>
                </a>
              </li>
              <li>
                <a href="/matches">
                  <i class="material-icons">pets</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="material-icons">person</i>
                </a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};


export default Header;
