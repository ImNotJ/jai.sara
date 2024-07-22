import React, { useEffect, useState } from 'react';
import './PaintModalStyles.css';
import paintImage from './assets/paint.png';
import headshot from './assets/headshot.jpg';

const PaintModal = ({ show, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (show) {
            setShowModal(true);
        }
    }, [show]);

    // const handleClose = () => {
    //     setShowModal(false);
    //     setTimeout(() => {
    //         onClose();
    //     }, 500); // Duration of the fade-out animation
    // };

    // Return null if the modal should not be shown
    if (!show && !showModal) {
        return null;
    }

    return (
        // Overlay for the modal
        <div className="pmodal-overlay">
            {/* Modal content container */}
            <div className={`pmodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button className="close-button" onClick={onClose}>

                </button>
                {/* Paint image */}
                <img src={paintImage} alt="Paint" className="pnotepad-image" />
                {/* About text container with headshot */}
                <div className="pabout-text">
                    <img src={headshot} alt="Headshot" style={{ scale: '50%', position: 'absolute', bottom: '120px', right: '570px', }} />
                </div>
            </div>
        </div>
    );
};

export default PaintModal;
