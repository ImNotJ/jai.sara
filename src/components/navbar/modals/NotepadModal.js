// Import necessary libraries and assets
import React, { useEffect, useState } from 'react';
import './NotepadModal.css';
import notepadImage from './assets/notebook.png';

const NotepadModal = ({ show, onClose }) => {
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
                    {isMobile ? (
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
                    ) : isSmall ? (
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
                    ) : (
                        <p>
                            Student at North Carolina State University (NCSU) pursuing a dual degree <br></br>
                            in Computer Science and Economics. I have a proven track record of <br></br>
                            leading small teams and delivering impactful software development projects <br></br>
                            across various domains. My experience spans AI development, data engineering, <br></br>
                            and research internships where I have honed my skills in programming, <br></br>
                            data analysis, and problem-solving. Passionate about learning new technologies <br></br>
                            and continuously improving my technical expertise.<span className="special-font">|</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Export the NotepadModal component as the default export
export default NotepadModal;
