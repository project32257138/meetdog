import React from 'react';
import "./style.css";

const Splash = () => {

    // const he = window.innerHeight;

    return (
        <main id="main-splash">
            <section id="close-button">
                <a href="/home">
                    <i class="medium material-icons" style={{ color: "white" }} >close</i>
                </a>
            </section>

            <section id="logo"><img src="../../../img/puppy-love.png" /></section>

            <section id="message">
                <h5>Discover new friends for your lovely pets around your area.</h5>
                <p>You must have a pet to enjoy this app.</p>
                <p>This application requires <b>Location Service</b> to be ON</p>
            </section>
        </main>
    )
}

export default Splash
