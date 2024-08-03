// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './NotepadModal.css';
import notepadImage from './assets/notebook.png';

const NotepadModal = ({ show, onClose, title, tools, body }) => {
    // State to track if the modal should be displayed
    const [showModal, setShowModal] = useState(false);


    // Effect to show the modal when the `show` prop changes
    useEffect(() => {
        if (show) {
            setShowModal(true);
        }
    }, [show]);

    // Return null if the modal should not be shown
    if (!show && !showModal) {
        return null;
    }

    return (
        // Overlay for the modal
        <div className="modal-overlay">
            {/* Modal content container */}
            <div className={`modal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button className="nclose-button" onClick={onClose}></button>
                {/* Notepad image */}
                <img src={notepadImage} alt="Notepad" className="notepad-image" />
                {/* About text container */}
                <div className="about-text">
                    <p>
                        <span className="title">{title}</span>
                        <br></br>
                        <span className="tools">{tools}</span>
                        <br></br>
                        <br></br>
                        <span className="body">{body}</span>
                        <span className="special-font">|</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

// Export the NotepadModal component as the default export
export default NotepadModal;
