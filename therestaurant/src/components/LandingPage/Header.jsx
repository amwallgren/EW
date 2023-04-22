import React from "react";

const Header = ({ onBookTableClick }) => (
  <header>
    <h1>EW</h1>
    <button>Contact us</button>
    <button>Our Menu</button>
    <button onClick={onBookTableClick}>Get me a table</button>
  </header>
);

export default Header;
