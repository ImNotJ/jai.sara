// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './PaintModalStyles.css';
import paintImage from './assets/paint.png';
import headshot from './assets/headshot.jpg';

const PaintModal = ({ show, onClose }) => {
    // State to track if the modal should be displayed
    const [showModal, setShowModal] = useState(false);
    // State to track if the viewport is mobile-sized
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 940);
    // State to track if the viewport is small (between mobile and desktop sizes)
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 1440 && window.innerWidth > 940);

    // Effect to update the mobile state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 940);
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to update the small screen state on window resize
    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 1440 && window.innerWidth > 940);
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to show the modal when the `show` prop changes
    useEffect(() => {
        if (show) {
            setShowModal(true);
        }
    }, [show]);

    // If the modal shouldn't be displayed, return null
    if (!show && !showModal) {
        return null;
    }

    // Styles for the headshot image based on screen size
    const pModalStyles = isMobile
        ? { scale: '30%', position: 'absolute', bottom: '190px', right: '640px' }
        : isSmall
            ? { scale: '30%', position: 'absolute', bottom: '-30px', right: '260px' }
            : { scale: '50%', position: 'absolute', bottom: '120px', right: '570px' };

    return (
        // Overlay for the modal
        <div className="pmodal-overlay">
            {/* Modal content container */}
            <div className={`pmodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button className="close-button" onClick={onClose}></button>
                {/* Paint image */}
                <img src={paintImage} alt="Paint" className="pnotepad-image" />
                {/* About text container with headshot */}
                <div className="pabout-text">
                    <img src={headshot} alt="Headshot" style={pModalStyles} />
                </div>
            </div>
        </div>
    );
};

// Export the PaintModal component as the default export
export default PaintModal;
