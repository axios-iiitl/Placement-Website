import React from "react";
import { NavLink, Link } from "react-router-dom";
class SideDrawer extends React.Component {
  state = {
    showDropDown: false
  };
  handleDropDown = () => {
    this.setState(cs => ({ showDropDown: !cs.showDropDown }));
  };
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) drawerClass = "side-drawer open";
    return (
      <div className={drawerClass}>
        <div className="side">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span onClick={this.props.click} className="sidebar-logo-text">
              IIIT Lucknow Placement Cell
            </span>
          </Link>
          <span className="cross-btn" onClick={this.props.click}>
            <i className="fas fa-times fa-2x" />
          </span>
        </div>
        <ul>
          <li onClick={this.props.click}>
            <NavLink to="/about-us" exact className="activeclass">
              About Us
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Past Recruitors
            </NavLink>
          </li>
          <li className="activeclass" onClick={this.handleDropDown}>
            Academics <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDown ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDown)}
                className="activeclass"
              >
                <NavLink to="/courses" exact className="activeclass">
                  Courses
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDown)}
                className=" activeclass"
              >
                <NavLink to="/demographics" exact className="activeclass">
                  Demographics
                </NavLink>
              </li>
            </ul>
          ) : null}
          <li onClick={this.props.click}>
            <NavLink to="/placement-stats" exact className="activeclass">
              Statistics
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/why-iiitl" exact className="activeclass">
              Why Us
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Procedure
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/the-team" exact className="activeclass">
              The Team
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
