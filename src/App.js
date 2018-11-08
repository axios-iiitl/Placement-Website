import React, { Component ,Fragment} from "react";
import { Route,  Switch } from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import PastRecruiters from './components/PastRecruiters';
import Placement from './components/Placement';
import Procedure from './components/Procedure';
import Why from './components/Why'
import Contact from './components/Contact'
import MessageD from './components/message'
import Messaget from './components/messaget'
import About from './components/about'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/past" exact component={PastRecruiters} />
      <Route path="/statistics"exact component={Placement} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/procedure" exact component={Procedure} />
      <Route path="/why" exact component={Why} />
      <Route path="/message/director" exact component={MessageD} />
      <Route path="/message/tpo" exact component={Messaget} />
      <Route path="/about" exact component={About} />
      </Switch>
        <Footer />
      </Fragment>
      
      
    );
  }
}

export default App;
