import React, { useEffect, useState } from 'react';
import './NotepadModal.css';
import notepadImage from './assets/notepad.png'; 

const NotepadModal = ({ show, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (show) {
            setShowModal(true);
        }
    }, [show]);

    const handleClose = () => {
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 500); // Duration of the fade-out animation
    };
    
    // Return null if the modal should not be shown
    if (!show && !showModal) {
        return null;
    }

    return (
        // Overlay for the modal
        <div className="modal-overlay" onClick={handleClose}>
            {/* Modal content container */}
            <div className={`modal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                {/* Notepad image */}
                <img src={notepadImage} alt="Notepad" className="notepad-image" />
                {/* About text container */}
                <div className="about-text">
                    <p>
                        Student at North Carolina State University (NCSU) pursuing a dual degree <br></br>in Computer Science and Economics. 
                        I have a proven track record of <br></br>leading small teams and delivering impactful software development projects <br></br>across various domains.
                        My experience spans AI development, data engineering, <br></br>and research internships where I have honed my skills in programming, <br></br>data analysis, and problem-solving. 
                        Passionate about learning new technologies <br></br>and continuously improving my technical expertise.<strong>|</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotepadModal;
