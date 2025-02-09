import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand ms-4 nav-link fs-4 text">User Behavior Data</Link>
            <Link to="/search" className="navbar-brand ms-4 nav-link fs-5 text text-secondary link-hover link-light">Search Through Dataset</Link>
        </nav>
    );
};

export default Nav;