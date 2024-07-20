import React from 'react';
import './SubmenuStyles.css';

function Submenu({ items, position, onClose }) {
    return (
        <div className="submenu" style={{ top: position.top-990, left: position.left + 290 }}>
            <ul className="submenu-nav">
                {items.map((item, index) => (
                    <li key={index} onClick={onClose}>
                        <img src={item.icon} alt={item.text} className="submenu-icon" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Submenu;
