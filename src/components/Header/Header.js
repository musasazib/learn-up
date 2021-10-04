import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    }
    return (
        <div className="nav-container">
            <nav>
                <img src={logo} width="130px" height="30px" alt="" />
                <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink>
                <NavLink activeStyle={activeStyle} to="/features">Features</NavLink>
                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                
                <button className="nav-btn">Sign up</button>
                <button className="nav-btn">Signing</button>
                
            </nav>
        </div>
    );
};

export default Header;