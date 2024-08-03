// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './NotepadModal.css';
import notepadImage from './assets/notebook.png';

const NotepadModal = ({ show, onClose }) => {
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
                        Student at North Carolina State University (NCSU)
                        pursuing a dual degree in Computer Science and
                        Economics. I have a proven track record of leading
                        small teams and delivering impactful software
                        development projects across various domains.
                        My experience spans AI development, data
                        engineering, and research internships where I
                        have honed my skills in programming, data
                        analysis, and problem-solving. Passionate about
                        learning new technologies and continuously
                        improving my technical expertise.<span className="special-font">|</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

// Export the NotepadModal component as the default export
export default NotepadModal;
