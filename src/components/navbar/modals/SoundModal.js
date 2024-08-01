// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './SoundModalStyles.css';
import sound from './assets/sound.png';

const SoundModal = ({ show, onClose, onEnable, onDisable }) => {
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
        <div className="smodal-overlay">
            <div className={`smodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                <button className="ssclose-button" onClick={onClose}></button>
                <button className="sclose-button" onClick={onDisable}></button>
                <button className="play-button" onClick={onEnable}></button>
                <img src={sound} alt="Media Player" className="snotepad-image" />
                
                
            </div>
        </div>
    );
};

export default SoundModal;
