import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PastRecruiters from "./components/PastRecruiters";
import Placement from "./components/Placement";
import Procedure from "./components/Procedure";
import Why from "./components/Why";
import Contact from "./components/Contact";
import MessageD from "./components/message";
import Messaget from "./components/messaget";
import About from "./components/about";
import Courses from "./components/courses";
import Facilities from "./components/Facilities";
import Demographics from "./components/demographics";
import Page404 from "./components/404";

class App extends Component {

  getClientHeight = () => {
    return document.documentElement.clientHeight;
  };

  componentDidMount() {
    const footer = document.getElementsByClassName("footer-outer-wrapper")[0];
    const mainPage = document.getElementsByClassName("main-page")[0];
    const clientHeight = this.getClientHeight();
    if (clientHeight >= 897) {
      let footerHeight = footer.offsetHeight;
      footerHeight += 20;
      footer.style.paddingTop = footerHeight + "px";
      mainPage.style.paddingBottom = footerHeight + "px";
    }
  }

  render() {
    const getFooterStyle = () => {
      const clientHeight = this.getClientHeight();
      if (clientHeight >= 897) {
        const style = {
          bottom: "0",
          width: "100%",
          position: "fixed",
          zIndex: "1"
        };
        return style;
      }
      return {};
    };
    return (
      <Fragment>
        <Navbar />
        <div className="main-page">
          <Switch>
            <Route path="/facilities" exact component={Facilities} />
            <Route path="/" exact component={Home} />
            <Route path="/our-recruiters" exact component={PastRecruiters} />
            <Route path="/placement-stats" exact component={Placement} />
            <Route path="/the-team" exact component={Contact} />
            <Route path="/procedure-and-policies" exact component={Procedure} />
            <Route path="/why-iiitl" exact component={Why} />
            <Route path="/message/director" exact component={MessageD} />
            <Route path="/message/tpo" exact component={Messaget} />
            <Route path="/about-us" exact component={About} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/demographics" exact component={Demographics} />
            <Route to="/404" component={Page404} />
          </Switch>
        </div>
        <div className="footer-outer-wrapper" style={getFooterStyle()}>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
