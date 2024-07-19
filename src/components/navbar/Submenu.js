import React from 'react';
import './SubmenuStyles.css';

function Submenu({ items, position, onClose }) {
    return (
        <div className="submenu" style={{ top: position.top-990, left: position.left + 290 }}>
            <ul className="submenu-nav">
                {items.map((item, index) => (
                    <li key={index} onClick={onClose}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Submenu;
