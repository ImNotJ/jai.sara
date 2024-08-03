// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './BrowserModalStyles.css';
import browser from './assets/browser.png';

const BrowserModal = ({ show, link, onClose, onLinkClick }) => {
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
        <div className="bmodal-overlay">
            <div className={`bmodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                <button className="bclose-button" onClick={onClose}></button>
                <img src={browser} alt="Browser" className="bnotepad-image" />
                <button className="link" onClick={() => link && onLinkClick(link)}>{link}</button>
            </div>
        </div>
    );
};

export default BrowserModal;
