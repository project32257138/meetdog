import React from "react";
import ReactDOM from "react-dom";
import LogoutButton from "../index";

test ("renders the correct content", ()=> {
    const root = document.createElement("div");
    ReactDOM.render(<LogoutButton />, root);

    expect(root.querySelector("button").textContent).toBe("Log Out");
});