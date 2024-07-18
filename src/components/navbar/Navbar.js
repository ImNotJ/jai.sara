import React, { useState, useEffect, useRef } from 'react';
// Importing necessary icons from 'react-icons' library
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';
import { MdPlayArrow } from "react-icons/md";

// Importing modal components and assets
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
    // State hooks for various UI elements
    const [nav, setNav] = useState(false); // Manages the navigation menu visibility
    const [active, setActive] = useState(false); // Manages the active state of the start button
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })); // Manages the current time display
    const [showPaintModal, setShowPaintModal] = useState(false);
    const [showNotepadModal, setShowNotepadModal] = useState(false); // Manages the visibility of the modals
    const [audioPlayed, setAudioPlayed] = useState(false); // Manages whether the audio has been played or not
    const audioRef = useRef(null); // Reference to the audio element

    // Toggle navigation menu and play audio if it hasn't been played yet
    const handleNav = () => {
        setNav(!nav);
        setActive(!active);
        if (!audioPlayed && audioRef.current) {
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
            setAudioPlayed(true);
        }


        setTimeout(() => {
            setShowNotepadModal(false);
            setTimeout(() => {
                setShowPaintModal(false);
            }, 500);
        }, 300);
    };

    // Toggle about modal visibility
    const handleAboutClick = () => {
        setNav(!nav);
        setActive(!active);
        setTimeout(() => {
            setShowPaintModal(true);
            setTimeout(() => {
                setShowNotepadModal(true);
            }, 500);
        }, 500);
    };

    const handleClosePaintModal = () => {
        setTimeout(() => {
            setShowPaintModal(false);
        }, 300);

    };

    const handleCloseNotepadModal = () => {
        setTimeout(() => {
            setShowNotepadModal(false);
        }, 300);
    };

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="navbar">
            {/* Audio element for startup sound */}
            <audio ref={audioRef} src={startup} preload="auto" />
            <div className="start-button">
                {/* Start button */}
                <button
                    className={active ? 'active' : ''}
                    onClick={handleNav}>
                    Start
                </button>
            </div>
            <div className="divider"></div>
            {/* Social media icons */}
            <div className="social-icons">
                <a href="https://github.com/ImNotJ" target="_blank" rel="noopener noreferrer">
                    <LiaGithubSquare className='icon' style={{ color: 'var(--pink)' }} />
                </a>
                <a href="https://www.linkedin.com/in/jaisaravanan/" target="_blank" rel="noopener noreferrer">
                    <LiaLinkedin className='icon' style={{ color: 'var(--blue)' }} />
                </a>
            </div>
            <div className="divider"></div>
            {/* Notepad Modal button */}
            {showNotepadModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseNotepadModal}>
                        <img src={aboutI} alt="Notepad Icon" className="notepad-icon" />
                        Untitled - Notepad
                    </button>
                </div>
            )}
            {/* Navigation menu */}
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <div className="blue-bar">
                    <span><strong>jaisara</strong><txt style={{ fontfamily: 'ms1' }}>.org</txt></span>
                </div>
                <ul className="mobile-nav">
                    <li onClick={handleAboutClick}>
                        <img src={aboutI} alt="About Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        <span><u>A</u>bout</span>
                    </li>
                    <li>
                        <img src={csI} alt="CS Projects Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        <span><u>C</u>S Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li>
                        <img src={finI} alt="Finance Projects Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        <span><u>F</u>inance Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li>
                        <img src={certI} alt="Certifications Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        <span><u>C</u>ertifications</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li>
                        <img src={contactI} alt="Contact Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        <span><u>C</u>ontact</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li>
                        <img src={idkI} alt="Unknown Icon" style={{ scale: '10%', margin: '-500px', position: 'absolute', left: '293px' }} />
                        ???</li>
                </ul>
            </div>
            <div className="clock">
                {/* Clock display */}
                {time}
            </div>
            {/* Modals */}
            <PaintModal show={showPaintModal} onClose={handleClosePaintModal} />
            <NotepadModal show={showNotepadModal} onClose={handleCloseNotepadModal} />

        </div>
    );
}

export default Navbar;
