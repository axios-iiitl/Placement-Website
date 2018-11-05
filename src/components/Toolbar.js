import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import ToggleButton from './ToggleButton'
const Toolbar =props=>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
       <div>
       <ToggleButton click={props.sideDrawerToggler}/>
       </div>
       <Link to="/" style={{textDecoration: "none", color: "white"}}>
        <div className="logo">
       IIIT Lucknow
        </div>
        </Link>
        <div className="spacer"></div>
        <div className="nav-elements">
         <ul>
             <li><NavLink to="/" exact className="activeclass">Home</NavLink></li>
             <li><NavLink to="/past" exact className="activeclass">Past Recruitors</NavLink></li>
             <li><NavLink to="/statistics" exact className="activeclass">Statistics</NavLink></li>
             <li><NavLink to="/why" exact className="activeclass">Why us</NavLink></li>
             <li><NavLink to="/procedure" exact className="activeclass">Procedure</NavLink></li>
             <li><NavLink to="/contact" exact className="activeclass">Contact us</NavLink></li>
         </ul>
        </div>    
    </nav>
    </header>
    
)

export default Toolbar;