import React, { useEffect, useState } from 'react';
import './FolderStyles.css';
import folder from './assets/folder.png';

const Folder = ({ show, items, onClose, onProjectClick }) => {
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
        <div className="fmodal-overlay">
            <div className={`fmodal-content ${show ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
                <button className="fclose-button" onClick={onClose}></button>
                <img src={folder} alt="Folder" className="fnotepad-image" />
                <ul className="folder-items" >
                    {items.map((item, index) => (
                        <li key={index} className="folder-lists">
                            <img src={item.icon} alt={item.text} className="folder-items-img" onClick={() => item.icon ? onProjectClick(item.title, item.tools, item.body, item.url2) : onClose()}/>
                            <span className="folder-items-text">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Folder;
