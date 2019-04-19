import React from "react";
import iiitl from "../assets/images/iiitl.jpeg";

import Ex from "./ex";
const Home = props => (
  <div>
    <div className="homepic">
      <img src={iiitl} alt="" className="logo-img" />
    </div>
    <h1 className="elegantshadow">The Institute Speaks</h1>
    <Ex />
  </div>
);

export default Home;
