import React, { useEffect, useState } from 'react';
import './SubmenuStyles.css';

function Submenu({ items, position, onClose, onItemClick }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 940);

    // Update the state based on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 940);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const submenuStyles = isMobile
        ? { top: 370, left: 55, width: '300px' }
        : { top: position.top - 990, left: position.left + 290, width: '300px' };

    const submenuNavStyles = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const submenuNavItemStyles = {
        fontFamily: 'ms1, MS Sans Serif, sans-serif',
        padding: '7px 7px 7px 45px',
        fontSize: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: 'var(--black)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const submenuIconStyles = {
        scale: '10%',
        margin: '-500px',
        marginRight: '10px',
        position: 'absolute',
        left: '248px',
    };

    return (
        <div className="submenu" style={submenuStyles}>
            <ul className="submenu-nav" style={submenuNavStyles}>
                {items.map((item, index) => (
                    <li key={index} onClick={() => item.url ? onItemClick(item.url) : onClose} style={submenuNavItemStyles}>
                        <img src={item.icon} alt={item.text} className="submenu-icon" style={submenuIconStyles} />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Submenu;
