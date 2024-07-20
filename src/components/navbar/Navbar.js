import React, { useState, useEffect, useRef } from 'react';
// Importing necessary icons from 'react-icons' library
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';
import { MdPlayArrow } from "react-icons/md";

// Importing modal components and assets
import NotepadModal from './NotepadModal';
import PaintModal from './PaintModal';
import Submenu from './Submenu';
import aboutI from './assets/notepad icon.png';
import csI from './assets/cs icon.png';
import finI from './assets/fin icon.png';
import certI from './assets/certi icon.png';
import contactI from './assets/contact icon.png';
import idkI from './assets/idk icon.png';
import paintI from './assets/paint icon.png';
import ccpI from './assets/icon7.png';
import gitI from './assets/icon9.png';
import linkI from './assets/icon3.png';
import sapI from './assets/start icon.png';
import cssaI from './assets/icon13.png';
import cs3 from './assets/icon2.png';
import cs2 from './assets/icon4.png';
import cs1 from './assets/icon8.png';




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
    const [submenuItems, setSubmenuItems] = useState([]); // Manage submenu items
    const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

    const audioRef = useRef(null); // Reference to the audio element
    const csRef = useRef(null);
    const finRef = useRef(null);
    const certRef = useRef(null);
    const contactRef = useRef(null);

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

    const handleSubmenuClick = (items, ref) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setSubmenuPosition({ top: rect.top, left: rect.left });
        }
        setSubmenuItems(items);
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

            {/* Paint Modal button */}
            {showPaintModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleClosePaintModal}>
                        <img src={paintI} alt="Paint Icon" className="note-icon" />
                        untitled - Paint
                    </button>
                </div>
            )}

            {/* Notepad Modal button */}
            {showNotepadModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseNotepadModal}>
                        <img src={aboutI} alt="Notepad Icon" className="note-icon" />
                        General - Notepad
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
                        <img src={aboutI} alt="About Icon" className='menu-icon' />
                        <span><u>A</u>bout</span>
                    </li>
                    <li ref={csRef} onClick={() => handleSubmenuClick([
                        { icon: cs1, text: 'TBD' },
                        { icon: cs2, text: 'TBD' },
                        { icon: cs3, text: 'TBD' }], csRef)}>
                        <img src={csI} alt="CS Projects Icon" className='menu-icon' />
                        <span><u>C</u>S Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={finRef} onClick={() => handleSubmenuClick([
                        { icon: ccpI, text: 'TBD' },
                        { icon: ccpI, text: 'TBD' },
                        { icon: ccpI, text: 'TBD' }], finRef)}>
                        <img src={finI} alt="Finance Projects Icon" className='menu-icon' />
                        <span><u>F</u>inance Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={certRef} onClick={() => handleSubmenuClick([
                        { icon: ccpI, text: 'AWS Cloud Practitioner' },
                        { icon: sapI, text: 'TBD' },
                        { icon: cssaI, text: 'TBD' }], certRef)}>
                        <img src={certI} alt="Certifications Icon" className='menu-icon' />
                        <span><u>C</u>ertifications</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={contactRef} onClick={() => handleSubmenuClick([
                        { icon: gitI, text: 'Github' },
                        { icon: linkI, text: 'Linkedin' }], contactRef)}>
                        <img src={contactI} alt="Contact Icon" className='menu-icon' />
                        <span><u>C</u>ontact</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li>
                        <img src={idkI} alt="Unknown Icon" className='menu-icon' />
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
            {submenuItems.length > 0 && (
                <Submenu items={submenuItems} position={submenuPosition} onClose={() => setSubmenuItems([])} />
            )}
        </div>
    );
}

export default Navbar;
