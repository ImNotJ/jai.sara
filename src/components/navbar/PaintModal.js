import React from 'react';
import './PaintModalStyles.css';
import paintImage from './assets/paint.png';
import headshot from './assets/headshot.jpg';

const PaintModal = ({ show, onClose }) => {
    // Return null if the modal should not be shown
    if (!show) {
        return null;
    }

    return (
        // Overlay for the modal
        <div className="pmodal-overlay" onClick={onClose}>
            {/* Modal content container */}
            <div className="pmodal-content" onClick={e => e.stopPropagation()}>
                {/* Paint image */}
                <img src={paintImage} alt="Paint" className="pnotepad-image" />
                {/* About text container with headshot */}
                <div className="pabout-text">
                    <img src={headshot} alt="Headshot" style={{ scale: '50%', position: 'absolute', bottom: '120px', right: '570px',}} />
                </div>
            </div>
        </div>
    );
};

export default PaintModal;
