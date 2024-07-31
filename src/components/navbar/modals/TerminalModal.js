// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './TerminalModalStyles.css';
import terminal from './assets/terminal.png';

const TerminalModal = ({ show, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (show) {
            setShowModal(true);
        }
    }, [show]);

    if (!show && !showModal) {
        return null;
    }

    return (
        <div className="tmodal-overlay">
            <div className={`tmodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}></button>
                <img src={terminal} alt="Terminal" className="tnotepad-image" />
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Welcome user...', 'Select Start to begin...', 'Enjoy :)'],
                            autoStart: true,
                            cursor: "_",
                            loop: true,
                            delay: 200,
                            deleteSpeed: 150,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalModal;
