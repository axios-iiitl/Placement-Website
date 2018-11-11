import React from 'react'
import {NavLink, Link} from 'react-router-dom'
const SideDrawer=props=>{
    let drawerClass='side-drawer'
    if(props.show)
    drawerClass='side-drawer open'
    return (
        <div className={drawerClass}>
        <div className='side'>
        <Link to="/" style={{textDecoration: "none", color: "white"}}>
        <span onClick={props.click} className="sidebar-logo-text">
            IIITL Placement Cell
        </span>
        </Link>
        <span className='cross-btn' onClick={props.click}>
        <i className="fas fa-times fa-2x"></i>
        </span>
        </div>
        <ul>
            
             
             <li onClick={props.click}><NavLink to="/about" exact className="activeclass">About Us</NavLink></li>
             <li onClick={props.click}><NavLink to="/past" exact className="activeclass">Past Recruitors</NavLink></li>
             <li onClick={props.click}><NavLink to="/statistics" exact className="activeclass">Statistics</NavLink></li>
             <li onClick={props.click}><NavLink to="/why" exact className="activeclass">Why Us</NavLink></li>
             <li onClick={props.click}><NavLink to="/procedure" exact className="activeclass">Procedure</NavLink></li>
             <li onClick={props.click}><NavLink to="/contact" exact className="activeclass">Contact us</NavLink></li>
         </ul>
        </div>
    )
};

export default SideDrawer