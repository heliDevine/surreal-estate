import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/NavBar.css';
import logo from '../logo.png';

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <img className="logo" src={logo} alt="logo" />
                <Link className="navbar-links-item" to="/">
                    View Properties
                </Link>
                <Link className="navbar-links-item" to="/add-property">
                    Add Property
                </Link>
            </ul>
        </div>
    );
};

export default NavBar;
