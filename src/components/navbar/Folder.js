import React, { useState } from 'react';
import './FolderStyles.css';

const Folder = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFolder = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="folder-container">
            <div className="folder-icon" onClick={toggleFolder}>
                <img src="path_to_folder_icon.png" alt="Folder Icon" />
                <div className="folder-title">{title}</div>
            </div>
            {isOpen && (
                <div className="folder-menu">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Folder;
