import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.css'

export const Header=()=>{
    return(
        <>
            <header className="header">
                <h1>Career RoadMap Progress Tracker</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/roadmaps">Road Maps</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/logout">Log Out</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;