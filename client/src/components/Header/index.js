import React, {useState, useEffect} from "react";
import AuthBtn from "../AuthBtn/AuthBtn"
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../Utils/api";


const Header = () => {
    const { user } = useAuth0();

    const [loggedID, setLoggedID] = useState("");

    useEffect(() => {

        // API.getLoggedUserByEmail(user.email)
        // .then(userId => {
        //     setLoggedID(userId);
        //     console.log(userId)
        // })
    })

    return (
        <>
            <header>
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
                                <a href={"/dogs/" + "605e58f29f0ef52213ba4746"}>Profile</a>
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
                                <a href="/matches">
                                    <i className="material-icons">pets</i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
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
