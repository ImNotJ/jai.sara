import React, { useState, useEffect } from 'react';
// import { BiSearch } from 'react-icons/bi';
// import { BsPerson } from 'react-icons/bs';
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';

import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    const handleNav = () => {
        setNav(!nav);
        setActive(!active);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="navbar">
            <div className="start-button">
                <button
                    className={active ? 'active' : ''}
                    onClick={handleNav}>
                    Start
                </button>
            </div>
            <div className="divider"></div>
            <div className="social-icons">
                <a href="https://github.com/ImNotJ" target="_blank" rel="noopener noreferrer">
                    <LiaGithubSquare className='icon' style={{color: 'var(--pink)'}}/>
                </a>
                <a href="https://www.linkedin.com/in/jaisaravanan/" target="_blank" rel="noopener noreferrer">
                    <LiaLinkedin className='icon' style={{color: 'var(--blue)'}}/>
                </a>
            </div>
            <div className="divider"></div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                </div>
            </div>
            <div className="clock">
                {time}
            </div>
        </div>
    );
}

export default Navbar;
