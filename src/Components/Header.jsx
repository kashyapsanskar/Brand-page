import React from 'react';
import './Header.css';
const Header=()=>{
    return  (
        <header className="header">
            <div className='logo'>Nike</div>
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
