import React from 'react'
import ToggleButton from './ToggleButton'
const Toolbar =props=>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
       <div>
       <ToggleButton click={props.sideDrawerToggler}/>
       </div>
        <div className="logo">
       IIIT Lucknow
        </div>
        <div className="spacer"></div>
        <div className="nav-elements">
         <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/">Past Recruitors</a></li>
             <li><a href="/">Placement Statistics</a></li>
             <li><a href="/">Why us</a></li>
             <li><a href="/">Procedure</a></li>
             <li><a href="/">Contact us</a></li>
         </ul>
        </div>    
    </nav>
    </header>
    
)

export default Toolbar;