import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurRecruiters from "./components/OurRecruiters";
import PlacementStats from "./components/PlacementStats";
import Procedure from "./components/Procedure";
import WhyIiitl from "./components/WhyIiitl";
import ContactUs from "./components/ContactUs";
import DirectorMessage from "./components/DirectorMessage";
import TpoMessage from "./components/TpoMessage";
import AboutUs from "./components/aboutUs";
import Courses from "./components/courses";
import Facilities from "./components/Facilities";
import Demographics from "./components/demographics";
import Page404 from "./components/404";
import AlumniSpeaks from "./components/AlumniSpeaks";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="main-page">
          <Switch>
            <Route path="/alumni-speaks" exact component={AlumniSpeaks} />
            <Route path="/facilities" exact component={Facilities} />
            <Route path="/" exact component={Home} />
            <Route path="/our-recruiters" exact component={OurRecruiters} />
            <Route path="/placement-stats" exact component={PlacementStats} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/procedure-and-policies" exact component={Procedure} />
            <Route path="/why-iiitl" exact component={WhyIiitl} />
            <Route path="/message/director" exact component={DirectorMessage} />
            <Route path="/message/tpo" exact component={TpoMessage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/demographics" exact component={Demographics} />
            <Route to="/404" component={Page404} />
          </Switch>
        </div>
        <div className="footer-outer-wrapper">
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
