import React, { useState } from "react";
import './Layout.css';
import ewModified from '../../images/ewModified.png';
import HamburgerMenu from "./HamburgerMenu";



function Header () {

  return ( 
    <>
      <header>

       <img className="ewHeader" src={ewModified}></img> 
        <HamburgerMenu />


      </header>
    </>
  );

};
export default Header;