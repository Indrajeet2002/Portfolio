import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

// function Navbar(){
//     return <nav className="nav">
//         <a href="/" className="site-title">Portfolio</a>
//         <ul>
//             <li className="active">
//                 <a href="/pricing">Intro</a>
//             </li>
//             <li>
//                 <a href="/about">Projects</a>
//             </li>
//             <li>
//                 <a href="/pricing">Contact</a>
//             </li>
//         </ul>
//     </nav>
// }

function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/intro">Intro</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                <Link to="/technicalwriting">Technical Writing</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;