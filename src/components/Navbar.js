import React from 'react';

import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer';
import Backdrop from "./Backdrop";


class Navbar extends React.Component{
    state={
        sideDrawerOpen:false
      }
      sideDrawerToggler=()=>{
        this.setState((cs)=>({sideDrawerOpen:!cs.sideDrawerOpen}))
      }
      backdropHandler=()=>{
        this.setState((cs)=>({sideDrawerOpen:false}))
      }
      render() {
    
        let backdrop;
        if(this.state.sideDrawerOpen){
          
          backdrop=<Backdrop />
        }
        return (
          <div>
          <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropHandler}/>
          {backdrop}
          
          <Toolbar sideDrawerToggler={this.sideDrawerToggler}/>
          </div>
        );
      }
}

export default Navbar;