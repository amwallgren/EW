import React, { useState } from "react";
import './lp.css';
import { Link } from "react-router-dom";

function HamburgerMenu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
        <nav className="navBar">
            <Link to="/menu">Our Menu</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to='/booking'>Get me a table</Link>

        <button className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
        </button>
        </nav>
        </>
    )
}
export default HamburgerMenu;