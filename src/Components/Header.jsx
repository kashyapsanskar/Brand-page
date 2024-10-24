import React from 'react';
import './Header.css';
import NikeLogo from '../assets/Nikelogo.png';
const Header=()=>{
    return  (
        <header className="header">
            <div className='logo'>
            <img src={NikeLogo} alt="Nike Logo" className="nike-logo" />
            </div>
            <nav>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button className='login-btn'>Login</button>
        </header>
    )
}
export default Header;
