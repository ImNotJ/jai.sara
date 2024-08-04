import React, { useState, useEffect, useRef } from 'react';
// Importing necessary icons from 'react-icons' library
import { LiaGithubSquare, LiaLinkedin } from 'react-icons/lia';
import { MdPlayArrow } from "react-icons/md";
import { csProjectsItems, financeProjectsItems, certificationsItems, contactItems } from './constants';


// Importing modal components and assets
import NotepadModal from './modals/NotepadModalArbitrary';
import PaintModal from './modals/PaintModal';
import SoundModal from './modals/SoundModal';
import TerminalModal from './modals/TerminalModal';
import BrowserModal from './modals/BrowserModal';
import Submenu from './Submenu';
import Folder from './Folder';
import aboutI from './assets/icons/notepad icon.png';
import csI from './assets/icons/cs icon.png';
import finI from './assets/icons/fin icon.png';
import certI from './assets/icons/certi icon.png';
import contactI from './assets/icons/contact icon.png';
import idkI from './assets/icons/idk icon.png';
import paintI from './assets/icons/paint icon.png';
import soundI from './assets/icons/soundicon.png';
import terminalI from './assets/icons/terminalI.png';
import browserI from './assets/icons/browserI.png';
import folderI from './assets/icons/folderI.png';
import folder2I from './assets/icons/folder2I.png';
import folder3I from './assets/icons/folder4I.png';
import folder4I from './assets/icons/folder3I.png';

import startup from './assets/sounds/windows98-startup.mp3.mp3';
import close from './assets/sounds/close98.mp3';
import menu from './assets/sounds/menu98.mp3';
import open from './assets/sounds/open98.mp3';
import start from './assets/sounds/start98.mp3';
import tada from './assets/sounds/tada98.mp3';
import play from './assets/sounds/play98.mp3';
import stop from './assets/sounds/stop98.mp3';

import './NavbarStyles.css';

function Navbar() {
    // State hooks for various UI elements
    const [nav, setNav] = useState(false); // Manages the navigation menu visibility
    const [active, setActive] = useState(false); // Manages the active state of the start button
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })); // Manages the current time display
    const [showPaintModal, setShowPaintModal] = useState(false);
    const [showNotepadModal, setShowNotepadModal] = useState(false); // Manages the visibility of the modals
    const [showSoundModal, setShowSoundModal] = useState(true);
    const [showTerminalModal, setShowTerminalModal] = useState(false);
    const [showFolder, setShowFolder] = useState(false);
    const [soundModalClosedOnce, setSoundModalClosedOnce] = useState(false); // Track if sound modal has been closed once

    const [audioPlayed, setAudioPlayed] = useState(false); // Manages whether the audio has been played or not
    const [submenuItems, setSubmenuItems] = useState([]); // Manage submenu items
    const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Manages the currently active submenu
    const [folderItems, setFolderItems] = useState([]); // Manage folder items
    const [activeFolder, setActiveFolder] = useState(null); // Manages the currently active folder
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 940); // Manage mobile state
    const [activeNavItem, setActiveNavItem] = useState(null); // Manage active nav item
    const [soundActive, setSoundActive] = useState(null); // Manage sound

    // State hooks for Notepad content
    const [notepadTitle, setNotepadTitle] = useState("");
    const [notepadTools, setNotepadTools] = useState("");
    const [notepadBody, setNotepadBody] = useState("");

    const [showBrowserModal, setShowBrowserModal] = useState(false);;
    const [projectUrl, setProjectUrl] = useState('');



    const audioRef = useRef(null); // Reference to the audio element
    const csRef = useRef(null);
    const finRef = useRef(null);
    const certRef = useRef(null);
    const contactRef = useRef(null);

    const fcsRef = useRef(null);
    const ffinRef = useRef(null);
    const fcertRef = useRef(null);

    // Toggle navigation menu and play audio if it hasn't been played yet
    const handleNav = () => {
        if (!soundModalClosedOnce) {
            setNav(false);
            setActive(false);
            setTimeout(() => {
                setShowSoundModal(false);
                setTimeout(() => {
                    setShowTerminalModal(true);
                    setSoundModalClosedOnce(true);
                }, 600);
            }, 300);
        } else {
            setTimeout(() => {
                setShowTerminalModal(false);
            }, 300);
            setNav(!nav);
            setActive(!active);
            setActiveNavItem(null);
            setSubmenuItems([]);
            if (!audioPlayed && audioRef.current) {
                audioRef.current.src = startup;
                audioRef.current.play().catch(error => {
                    console.log('Audio playback failed:', error);
                });
                setAudioPlayed(true);
            } else if (audioPlayed && soundActive) {
                audioRef.current.src = start;
                audioRef.current.play().catch(error => {
                    console.log('Audio playback failed:', error);
                });
            }

            setTimeout(() => {
                setShowNotepadModal(false);
                setShowSoundModal(false);
                setShowFolder(false);
                setTimeout(() => {
                    setShowPaintModal(false);
                    setShowBrowserModal(false);
                }, 500);
            }, 300);

        }
    };

    // Toggle about modal visibility
    const handleAboutClick = () => {
        if (soundActive) {
            audioRef.current.src = open;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setNotepadTitle("About Me");
        setNotepadTools("");
        setNotepadBody("Student at North Carolina State University (NCSU) pursuing a dual degree in Computer Science and Economics. I have a proven track record of leading small teams and delivering impactful software development projects across various domains. My experience spans AI development, data engineering, and research internships where I have honed my skills in programming, data analysis, and problem-solving. Passionate about learning new technologies and continuously improving my technical expertise.");

        setNav(!nav);
        setActive(!active);
        setTimeout(() => {
            setShowPaintModal(true);
            setTimeout(() => {
                setShowNotepadModal(true);
            }, 500);
        }, 500);
        setSubmenuItems([]);
    };

    const handleClosePaintModal = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowPaintModal(false);
        }, 300);
    };

    const handleCloseNotepadModal = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowNotepadModal(false);
        }, 300);
    };

    const handleOpenSoundModal = () => {
        if (soundActive) {
            audioRef.current.src = open;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        if (nav || active) {
            setNav(!nav);
            setActive(!active);
            setSubmenuItems([]);
            setTimeout(() => {
                setShowSoundModal(!showSoundModal);
            }, 300);
        } else if (showNotepadModal) {
            setTimeout(() => {
                setShowNotepadModal(false);
            }, 300);
            if (showPaintModal) {
                setTimeout(() => {
                    setShowPaintModal(false);
                }, 600);
                setTimeout(() => {
                    setShowSoundModal(!showSoundModal);
                }, 900);
            } else if (showBrowserModal || showFolder) {
                setTimeout(() => {
                    setShowBrowserModal(false);
                    setShowFolder(false);
                }, 600);
                setTimeout(() => {
                    setShowSoundModal(!showSoundModal);
                }, 900);
            } else {
                setTimeout(() => {
                    setShowSoundModal(!showSoundModal);
                }, 600);
            }

        } else if (showPaintModal) {
            setTimeout(() => {
                setShowPaintModal(false);
            }, 300);
            setTimeout(() => {
                setShowSoundModal(!showSoundModal);
            }, 600);
        } else if (showTerminalModal) {
            setTimeout(() => {
                setShowTerminalModal(false);
            }, 300);
            setTimeout(() => {
                setShowSoundModal(!showSoundModal);
            }, 600);
        } else if (showBrowserModal || showFolder) {
            setTimeout(() => {
                setShowBrowserModal(false);
                setShowFolder(false);
            }, 300);
            setTimeout(() => {
                setShowSoundModal(!showSoundModal);
            }, 600);
        } else {
            setTimeout(() => {
                setShowSoundModal(!showSoundModal);
            }, 300);
        }


    };

    const handleCloseSoundModal = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowSoundModal(false);
            if (!soundModalClosedOnce) {
                setTimeout(() => {
                    setShowTerminalModal(true);
                    setSoundModalClosedOnce(true);
                }, 600);

            }
        }, 300);
    };

    const handleSoundOn = () => {
        const playAudio = new Audio(play);
        playAudio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });

        setSoundActive(true);
        setTimeout(() => {
            setShowSoundModal(false);
            if (!soundModalClosedOnce) {
                setTimeout(() => {
                    if (showTerminalModal) {
                        setTimeout(() => {
                            const closeAudio = new Audio(tada);
                            closeAudio.play().catch(error => {
                                console.log('Audio playback failed:', error);
                            });
                        }, 10000);
                    }
                    setShowTerminalModal(true);
                }, 600);
                setSoundModalClosedOnce(true);
            }
        }, 300);
    };

    const handleSoundOff = () => {
        if (!soundModalClosedOnce) {
            setTimeout(() => {
                setShowSoundModal(false);
                setTimeout(() => {
                    setShowTerminalModal(true);
                    setSoundModalClosedOnce(true);
                }, 600);
            }, 300);
        }
        const closeAudio = new Audio(stop);
        closeAudio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });

        setSoundActive(false);
        setTimeout(() => {
            setShowSoundModal(false);
            if (!soundModalClosedOnce) {
                setTimeout(() => {
                    setShowTerminalModal(true);
                }, 600);
                setSoundModalClosedOnce(true);
            }
        }, 300);
    };

    const handleCloseTerminalModal = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowTerminalModal(false);
        }, 300);
    };

    const handleFolderClick = (items, ref) => {
        setNav(false);
        setActive(false);
        setSubmenuItems([]);



        if (activeFolder === ref.current) {
            if (soundActive) {
                audioRef.current.src = close;
                audioRef.current.play().catch(error => {
                    console.log('Audio playback failed:', error);
                });
            }

            setActiveFolder(null);
            setTimeout(() => {
                setShowFolder(false);
            }, 300);


        } else {
            if (soundActive) {
                audioRef.current.src = menu;
                audioRef.current.play().catch(error => {
                    console.log('Audio playback failed:', error);
                });
            }

            if (!soundModalClosedOnce) {
                setTimeout(() => {
                    setShowSoundModal(false);
                    setTimeout(() => {
                        setShowTerminalModal(true);
                        setSoundModalClosedOnce(true);
                    }, 600);
                }, 300);
            } else {
                setFolderItems(items);
                setActiveFolder(ref.current);
                if (nav || active) {
                    setNav(!nav);
                    setActive(!active);
                    setSubmenuItems([]);
                    setTimeout(() => {
                        setShowFolder(true);
                    }, 300);
                } else if (showNotepadModal) {
                    setTimeout(() => {
                        setShowNotepadModal(false);
                    }, 300);
                    if (showPaintModal) {
                        setTimeout(() => {
                            setShowPaintModal(false);
                        }, 600);
                        setTimeout(() => {
                            setShowFolder(true);
                        }, 900);
                    } else if (showBrowserModal || showSoundModal) {
                        setTimeout(() => {
                            setShowBrowserModal(false);
                            setShowSoundModal(false);
                        }, 600);
                        setTimeout(() => {
                            setShowFolder(true);
                        }, 900);
                    } else {
                        setTimeout(() => {
                            setShowFolder(true);
                        }, 600);
                    }

                } else if (showPaintModal) {
                    setTimeout(() => {
                        setShowPaintModal(false);
                    }, 300);
                    setTimeout(() => {
                        setShowFolder(true);
                    }, 600);
                } else if (showTerminalModal) {
                    setTimeout(() => {
                        setShowTerminalModal(false);
                    }, 300);
                    setTimeout(() => {
                        setShowFolder(true);
                    }, 600);
                } else if (showBrowserModal || showSoundModal) {
                    setTimeout(() => {
                        setShowBrowserModal(false);
                        setShowSoundModal(false);
                    }, 300);
                    setTimeout(() => {
                        setShowFolder(true);
                    }, 600);
                } else {
                    setTimeout(() => {
                        setShowFolder(true);
                    }, 300);
                }
            }


        }
    }

    const handleCloseFolder = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowFolder(false);
        }, 300);
    }

    const handleSubmenuClick = (items, ref) => {
        if (soundActive) {
            audioRef.current.src = menu;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        if (activeSubmenu === ref.current) {
            // If the same submenu is clicked, close it
            setActiveSubmenu(null);
            setSubmenuItems([]);
            setActiveNavItem(null);
        } else {
            // Otherwise, open the new submenu
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const distanceFromBottom = window.innerHeight - rect.bottom;
                setSubmenuPosition({ top: rect.top, bottom: distanceFromBottom, right: rect.right, left: rect.left });
            }
            setSubmenuItems(items);
            setActiveSubmenu(ref.current);
            setActiveNavItem(ref.current);
        }
    };

    const handleCloseSubmenu = () => {
        setActiveNavItem(null);
        setSubmenuItems([]);
        setNav(false);
        setActive(false);

    };

    const handleProjectClick = (title, tools, body, url) => {
        if (soundActive) {
            audioRef.current.src = open;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setNotepadTitle(title);
        setNotepadTools(tools);
        setNotepadBody(body);
        setProjectUrl(url);

        setNav(false);
        setActive(false);

        if (showFolder) {
            setTimeout(() => {
                setShowFolder(false);
                setTimeout(() => {
                    setShowBrowserModal(true);
                    setTimeout(() => {
                        setShowNotepadModal(true);
                    }, 500);
                }, 500);
            }, 300);

        } else {
            setTimeout(() => {
                setShowBrowserModal(true);
                setTimeout(() => {
                    setShowNotepadModal(true);
                }, 500);
            }, 500);
        }


        setSubmenuItems([]);
    }

    const handleCloseBrowserModal = () => {
        if (soundActive) {
            audioRef.current.src = close;
            audioRef.current.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        }

        setTimeout(() => {
            setShowBrowserModal(false);
        }, 300);
    }



    const handleUnknownClick = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener noreferrer');
        setActiveNavItem(null);
    };

    // Redirect function for submenu items
    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
        setActiveNavItem(null);
    };

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Update mobile state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 940);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navbar">
            {/* Audio element for startup sound */}
            {(soundActive) && <audio ref={audioRef} src={startup} preload="auto" />}
            <div className="start-button">
                {/* Start button */}
                <button
                    className={active ? 'active' : ''}
                    onClick={handleNav}>
                    Start
                </button>
            </div>
            {((!isMobile) || (isMobile && !nav)) && (
                <>
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
                </>
            )}

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

            {/* Browser Modal button */}
            {showBrowserModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseBrowserModal}>
                        <img src={browserI} alt="Browser Icon" className="note-icon" />
                        about:blank...
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
                        General - Not...
                    </button>
                </div>
            )}

            {/* Sound Modal button */}
            {showSoundModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseSoundModal}>
                        <img src={soundI} alt="Sound Icon" className="note-icon" />
                        Sound - Soun...
                    </button>
                </div>
            )}

            {/* Folder Modal button */}
            {showFolder && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseFolder}>
                        <img src={folder4I} alt="Folder Icon" className="note-icon" />
                        Control Pane...
                    </button>
                </div>
            )}

            {/* Terminal Modal button */}
            {showTerminalModal && (
                <div className="amodal-button">
                    <button
                        className={active ? 'active' : ''}
                        onClick={handleCloseTerminalModal}>
                        <img src={terminalI} alt="Terminal Icon" className="note-icon" />
                        New Connectio...
                    </button>
                </div>
            )}

            {/* Folders */}
            <div>
                <ul className="folders">
                    <li ref={fcsRef} className="folders-li" onClick={() => handleFolderClick(csProjectsItems, fcsRef)}>
                        <img src={folder3I} alt="CS Projects Icon" className='folder-menu-icon' />
                        CS Projects
                    </li>
                    <li ref={ffinRef} className="folders-li" onClick={() => handleFolderClick(financeProjectsItems, ffinRef)}>
                        <img src={folderI} alt="Finance Projects Icon" className='folder-menu-icon' />
                        Fin. Projects
                    </li>
                    <li ref={fcertRef} className="folders-li" onClick={() => handleFolderClick(certificationsItems, fcertRef)}>
                        <img src={folder2I} alt="Certifications Icon" className='folder-menu-icon' />
                        Certifications
                    </li>
                </ul>
            </div>

            {/* Navigation menu */}
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <div className="blue-bar">
                    <span><strong>jaisara</strong><txt style={{ fontFamily: 'ms1' }}>.org</txt></span>
                </div>
                <ul className="mobile-nav">
                    <li className={activeNavItem === 'about' ? 'active' : ''} onClick={handleAboutClick}>
                        <img src={aboutI} alt="About Icon" className='menu-icon' />
                        <span><u>A</u>bout</span>
                    </li>
                    <li ref={csRef} className={activeNavItem === csRef.current ? 'active' : ''} onClick={() => handleSubmenuClick(csProjectsItems, csRef)}>
                        <img src={csI} alt="CS Projects Icon" className='menu-icon' />
                        <span><u>C</u>S Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={finRef} className={activeNavItem === finRef.current ? 'active' : ''} onClick={() => handleSubmenuClick(financeProjectsItems, finRef)}>
                        <img src={finI} alt="Finance Projects Icon" className='menu-icon' />
                        <span><u>F</u>inance Projects</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={certRef} className={activeNavItem === certRef.current ? 'active' : ''} onClick={() => handleSubmenuClick(certificationsItems, certRef)}>
                        <img src={certI} alt="Certifications Icon" className='menu-icon' />
                        <span><u>C</u>ertifications</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li ref={contactRef} className={activeNavItem === contactRef.current ? 'active' : ''} onClick={() => handleSubmenuClick(contactItems, contactRef)}>
                        <img src={contactI} alt="Contact Icon" className='menu-icon' />
                        <span><u>C</u>ontact</span> <MdPlayArrow className='arrow-icon' />
                    </li>
                    <li onClick={handleUnknownClick}>
                        <img src={idkI} alt="Unknown Icon" className='menu-icon' />
                        ???
                    </li>
                </ul>
            </div>




            <div className="clock">
                <img
                    src={soundI}
                    alt="Sound"
                    onClick={handleOpenSoundModal}
                    className='sound-icon'
                />
                {/* Clock display */}
                <div className="time">{time}</div>
            </div>

            {/* Modals */}

            <PaintModal show={showPaintModal} onClose={handleClosePaintModal} />
            <NotepadModal show={showNotepadModal} onClose={handleCloseNotepadModal} title={notepadTitle} tools={notepadTools} body={notepadBody} />
            <BrowserModal show={showBrowserModal} link={projectUrl} onClose={handleCloseBrowserModal} onLinkClick={handleRedirect} />
            <SoundModal show={showSoundModal} onClose={handleCloseSoundModal} onEnable={handleSoundOn} onDisable={handleSoundOff} />
            <TerminalModal show={showTerminalModal} onClose={handleCloseTerminalModal} />
            {submenuItems.length > 0 && (
                <Submenu items={submenuItems} position={submenuPosition} onClose={handleCloseSubmenu} onItemClick={handleRedirect} onProjectClick={handleProjectClick} />
            )}

            {folderItems.length > 0 && (
                <Folder show={showFolder} items={folderItems} onClose={handleCloseFolder} onProjectClick={handleProjectClick} />
            )}

            {/* <Folder title="CS Projects" type="csProjects" />
            <Folder title="Finance Projects" type="financeProjects" />
            <Folder title="Certifications" type="certifications" />  */}




        </div>

    );
}

export default Navbar;
