import React from "react";
import './lp.css';
import ew from '../../images/ew.png';
import HamburgerMenu from "./HamburgerMenu";

function Header ({ onBookTableClick }) {

  const showContactComponent = () => {
    // link to contact component page
  }
  const showMenuComponent = () => {
    // link to menu component page 
  }

  return ( 
    <>
      <header>
       <img className="ewHeader" src={ew}></img>
       <HamburgerMenu />
{/*     <button onClick={showContactComponent}>Contact us</button>
        <button onClick={showMenuComponent}>Our Menu</button> 
        <button onClick={onBookTableClick}>Get me a table</button> */}
      </header>
    </>
  );

};
export default Header;
