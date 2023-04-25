import React, { useState } from "react";
import './lp.css';
import ew from '../../images/ew.png';
import HamburgerMenu from "./HamburgerMenu";
import { BookingSystem } from "../Booking/BookingSystem";


function Header ({ onBookTableClick }) {
 const [restaurantId] = useState(null)

  return ( 
    <>
      <header>
       <img className="ewHeader" src={ew}></img>
       <BookingSystem restaurantId={restaurantId} />
       <HamburgerMenu />
      </header>
    </>
  );

};
export default Header;