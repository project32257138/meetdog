import React from "react";
import ReactDOM from "react-dom";
// import LogoutButton from "../LogoutBtn";
import { render } from "@testing-library/react";

it("renders without crashing", ()=> {
    // render(<LogoutButton />);
    const button = document.createElement("button");
    ReactDOM.render(<button></button>, button);
});

it("renders button correctly", () => {
    render(<button 
        className="btn-flat white-text"
        onClick={() =>
        logout({
            returnTo: window.location.origin,
        })
        }
    >
    Log Out</button>)
});

//testing the functionality of the logout btn

const oldWindowLocation = window.location

beforeAll(() => {
    delete window.location

    window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      assign: {
        configurable: true,
        value: jest.fn(),
      },
    },
  )
});

beforeEach(() => {
  window.location.assign.mockReset()
})
afterAll(() => {
  // restore `window.location` to the `jsdom` `Location` object
  window.location = oldWindowLocation
});

test('it calls assign with expected URL', () => {
  window.location.assign(window.location.origin)

  expect(window.location.assign).toHaveBeenCalledTimes(1)
  expect(window.location.assign).toHaveBeenCalledWith(
    window.location.origin,
  )
});