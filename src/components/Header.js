import React from "react";
import { Link } from "react-router-dom";


function Header(props) {
    return (

        <header className="header">
           <h1>   


    <Link to="/about"> Chris Acedo</Link>

    <div className="nav-tabs">
    <Link to="/about"> About </Link>
    <Link to="/Portfolio"> Portfolio </Link>
    <Link to="/contact"> Contact </Link>
    <Link to="/about">  Resume </Link>
    </div>
    
    </h1>
    </header>

    );
}

export default Header;