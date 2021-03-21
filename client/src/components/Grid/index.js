import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a materialize container without worrying about class names
export function Container({ children }) {
  return <div className={`container`}>{children}</div>;
}

// This Row component lets us use a materialize row without having to think about class names
export function Row({ children }) {
  return <div className={`row`}>{children}</div>;
}

// This Col component lets us size materialize columns with less syntax
// e.g. <Col size= s12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col s" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
