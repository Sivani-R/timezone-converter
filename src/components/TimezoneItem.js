import React from 'react';
import './TimezoneItem.css';

const TimezoneItem = ({ timezone, time, onRemove }) => {
    
    const convertedTime = new Date(time).toLocaleString("en-US", { timeZone: timezone });

    return (
        <div className="timezone-item">
            <span>{timezone}: {convertedTime}</span>
            <button onClick={onRemove}>x</button>
        </div>
    );
};

export default TimezoneItem;
