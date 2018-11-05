import React from 'react'
import ToggleButton from './ToggleButton'
const Toolbar =props=>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
       <div>
       <ToggleButton click={props.sideDrawerToggler}/>
       </div>
        <div className="logo">
        <span className="odd">I</span>
        <span className="even">I</span>
        <span className="odd">I</span>
        <span className="even">T</span>
        <span style={{paddingLeft:"1vw"}}>   </span>
        <span className="odd">L</span>
        <span className="even">u</span>
        <span className="odd">c</span>
        <span className="even">k</span>
        <span className="odd">n</span>
        <span className="even">o</span>
        <span className="odd">w</span>
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