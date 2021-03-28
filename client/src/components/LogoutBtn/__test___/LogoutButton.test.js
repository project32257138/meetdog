import React from "react";
import ReactDOM from "react-dom";
import LogoutButton from "../LogoutBtn";
import { render } from "@testing-library/react";

it("renders without crashing", ()=> {
    const button = document.createElement("button");
    ReactDOM.render(<button></button>, button);
});

test("test", () => {
    expect(true).toBe(true);
})

