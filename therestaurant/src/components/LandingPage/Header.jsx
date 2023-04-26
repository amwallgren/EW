import React, { useState } from "react";
import './Layout.css';
import ew from '../../images/ew.png';
import HamburgerMenu from "./HamburgerMenu";



function Header () {
//  const [restaurantId] = useState(null)

  return ( 
    <>
      <header>

       <img className="ewHeader" src={ew}></img> 
        <HamburgerMenu />


      </header>
    </>
  );

};
export default Header;