import React, { useState, useEffect, useRef } from 'react';
// import { BiSearch } from 'react-icons/bi';
// import { BsPerson } from 'react-icons/bs';
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';
import { MdPlayArrow } from "react-icons/md";
import NotepadModal from './NotepadModal';
import PaintModal from './PaintModal';
import aboutI from './assets/notepad icon.png';
import csI from './assets/cs icon.png';
import finI from './assets/fin icon.png';
import certI from './assets/certi icon.png';
import contactI from './assets/contact icon.png';
import idkI from './assets/idk icon.png';
import startup from './assets/windows98-startup.mp3.mp3';

import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [showModals, setShowModals] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const audioRef = useRef(null);

    const handleNav = () => {
        setNav(!nav);
        setActive(!active);
        if (!audioPlayed && audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
            setAudioPlayed(true);
        }
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
            <audio ref={audioRef} src={startup} preload="auto" />
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
                    <li onClick={handleAboutClick}><img src={aboutI} alt="aboutI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/><span><u>A</u>bout</span></li>
                    <li><img src={csI} alt="csI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/><span><u>C</u>S Projects</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><img src={finI} alt="finI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/><span><u>F</u>inance Projects</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><img src={certI} alt="certI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/><span><u>C</u>ertifications</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><img src={contactI} alt="contactI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/><span><u>C</u>ontact</span> <MdPlayArrow className='arrow-icon'/></li>
                    <li><img src={idkI} alt="idkI" style={{scale: '10%', margin: '-500px', position: 'absolute', left:'293px'}}/>???</li>
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
