import React, {useState, useEffect} from "react";
import AuthBtn from "../AuthBtn/AuthBtn"
import "./style.css";

const Header = () => {
    
    return (
        <>
            <header className="z-depth-2">
                <nav id="navbar">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo" id="nav-logo">
                            <img src="../../../img/puppy-love-small.png" alt=""></img>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href={"/profile/"}>Profile</a>
                            </li>
                            <li>
                                <AuthBtn className="btn-flat white-text" />
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav id="nav-mobile" className="hide-on-large-only">
                    <div className="nav-wrapper">
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="material-icons">home</i>
                                </a>
                            </li>
                           
                            <li>
                                <a href={"/profile/"}>
                                    <i className="material-icons">person</i>
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
