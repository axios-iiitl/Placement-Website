import React from "react";
import iiitl from "../assets/images/iiitl.jpg";

import Ex from "./ex";
const Home = props => (
  <div>
    <img src={iiitl} alt="" className="logo-img" />
    <h1 className="elegantshadow">The institute speaks</h1>
    <Ex />
  </div>
);

export default Home;
