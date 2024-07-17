import React from 'react';
import './PaintModalStyles.css';
import paintImage from './paint.png';
import headshot from './headshot.jpg';

const PaintModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="pmodal-overlay" onClick={onClose}>
            <div className="pmodal-content" onClick={e => e.stopPropagation()}>
                <img src={paintImage} alt="Paint" className="pnotepad-image" />
                <div className="pabout-text">
                    <img src={headshot} alt="Paint" style={{ scale: '50%', position: 'absolute', bottom: '120px', right: '570px',}} />
                </div>

            </div>
        </div>
    );
};

export default PaintModal;
