import React from "react";
import "./navbar.css";
import {Link} from "react-scroll";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Intro</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="product" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar;