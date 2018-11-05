import React from 'react'

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
             <li><a href="/">Home</a></li>
             <li><a href="/">Past Recruitors</a></li>
             <li><a href="/">Placement Statistics</a></li>
             <li><a href="/">Why us</a></li>
             <li><a href="/">Procedure</a></li>
             <li><a href="/">Contact us</a></li>
             </ul>
        </div>
    )
};

export default SideDrawer