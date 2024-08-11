import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, onToggle }) => {
    return (
        <button className="dark-mode-toggle" onClick={onToggle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
