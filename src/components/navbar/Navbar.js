import React, { useState, useEffect } from 'react';
// import { BiSearch } from 'react-icons/bi';
// import { BsPerson } from 'react-icons/bs';
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';
import { MdPlayArrow } from "react-icons/md";
import NotepadModal from './NotepadModal';
import PaintModal from './PaintModal';

import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [showModals, setShowModals] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setActive(!active);
    };

    const handleAboutClick = () => {
        setNav(!nav);
        setActive(!active);
        setShowModals(!showModals);
        
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
                <div className="blue-bar">
                    <span><strong>jaisara</strong>.org</span>
                </div>
                <ul className="mobile-nav">
                    <li onClick={handleAboutClick}><span><u>A</u>bout</span></li>
                    <li><span><u>C</u>S Projects</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><span><u>F</u>inance Projects</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><span><u>C</u>ertifications</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><span><u>C</u>ontact</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li>???</li>
                </ul>
            </div>
            <div className="clock">
                {time}
            </div>
            <NotepadModal show={showModals} onClose={handleAboutClick} />
            <PaintModal show={showModals} onClose={handleAboutClick} />
        </div>
    );
}

export default Navbar;
