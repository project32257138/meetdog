import React from "react";
import "./style.css";
import LoginBtn from "../LoginBtn/LoginBtn";

const Splash = () => {
  return (
    <main id="main-splash">
      <section id="logo">
        <img src="../../../img/puppy-love.png" alt="" />
      </section>

      <section id="message">
        <h5>Discover new friends for your lovely pets around your area.</h5>
        <p>You must have a pet to enjoy this app.</p>
        <p>
          This application requires <b>Location Service</b> to be ON
        </p>
        <LoginBtn />
      </section>
    </main>
  );
};

export default Splash;
