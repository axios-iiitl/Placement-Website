import React from "react";
import batch2015 from "../assets/images/batch2015.jpg";

import Ex from "./ex";
const Home = props => (
  <div>
    <div className="homepic">
      <img src={batch2015} alt="" className="logo-img" />
    </div>
    <h1 className="elegantshadow">The Institute Speaks</h1>
    <Ex />
  </div>
);

export default Home;
