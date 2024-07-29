// Import necessary libraries and styles
import React, { useEffect, useState } from 'react';
import './SubmenuStyles.css';

function Submenu({ items, position, onClose, onItemClick }) {
    // State to track if the viewport is mobile-sized
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 940);

    // Effect to update the mobile state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 940);
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Styles for the submenu container based on screen size
    const submenuStyles = isMobile
        ? { top: 370, left: 55, width: '300px' }
        : { position: 'absolute', top: -position.bottom, left: position.left + 290, width: '300px' };

    // Styles for the submenu navigation list
    const submenuNavStyles = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    // Styles for the submenu icon
    const submenuIconStyles = {
        scale: '10%',
        margin: '-500px',
        marginRight: '10px',
        position: 'absolute',
        left: '248px',
    };

    return (
        // Submenu container with dynamic styles
        <div className="submenu" style={submenuStyles}>
            {/* Submenu navigation list */}
            <ul className="submenu-nav" style={submenuNavStyles}>
                {/* Iterate over items to create submenu options */}
                {items.map((item, index) => (
                    <li key={index} onClick={() => item.url ? onItemClick(item.url) : onClose()} className="submenu-nav li">
                        <img src={item.icon} alt={item.text} className="submenu-icon" style={submenuIconStyles} />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Export the Submenu component as the default export
export default Submenu;
