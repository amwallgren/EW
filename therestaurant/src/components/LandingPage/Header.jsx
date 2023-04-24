import React from "react";

export const Header = ({ onBookTableClick }) => (
  <header>
    {/* <h1>EW</h1>
    <button>Contact us</button>
    <button>Our Menu</button> */}
    <h1>Restaurang</h1>
    <button onClick={onBookTableClick}>Boka bord</button>
  </header>
);

