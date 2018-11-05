import React from 'react'
import {NavLink} from 'react-router-dom'
const SideDrawer=props=>{
    let drawerClass='side-drawer'
    if(props.show)
    drawerClass='side-drawer open'
    return (
        <div className={drawerClass}>
        <div className='side'>
        <span>
            IIIT Lucknow
        </span>
        <span className='cross-btn' onClick={props.click}>X</span>
        </div>
        <ul>
             <li><NavLink to="/" exact className="activeclass">Home</NavLink></li>
             <li><NavLink to="/past" exact className="activeclass">Past Recruitors</NavLink></li>
             <li><NavLink to="/statistics" exact className="activeclass">Statistics</NavLink></li>
             <li><NavLink to="/why" exact className="activeclass">Why us</NavLink></li>
             <li><NavLink to="/procedure" exact className="activeclass">Procedure</NavLink></li>
             <li><NavLink to="/contact" exact className="activeclass">Contact us</NavLink></li>
         </ul>
        </div>
    )
};

export default SideDrawer