import React from "react";
import loading from "../assets/loading.svg";
import loading from "../../../public/img/loading.svg"

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
