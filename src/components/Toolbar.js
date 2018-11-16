import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ToggleButton from './ToggleButton'
const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.sideDrawerToggler} />
            </div>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <div className="logo">
                    IIITL Placement Cell
        </div>
            </Link>
            <div className="spacer"></div>
            <div className="nav-elements">
                <ul>

                    <li><NavLink to="/about" exact className="activeclass">About Us</NavLink></li>
                    <li className="dropdown">
                        <button className="dropbtn"><span>Academics </span>
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to="/courses" exact className="activeclass">Courses</NavLink>
                            <NavLink to="/demographics" exact className="activeclass">Demographics</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="/past" exact className="activeclass">Our Recruiters</NavLink></li>
                    <li><NavLink to="/statistics" exact className="activeclass">Statistics</NavLink></li>
                    <li><NavLink to="/why" exact className="activeclass">Why Us</NavLink></li>
                    <li><NavLink to="/procedure" exact className="activeclass">Procedure</NavLink></li>
                    <li><NavLink to="/contact" exact className="activeclass">The Team</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>

)

export default Toolbar;