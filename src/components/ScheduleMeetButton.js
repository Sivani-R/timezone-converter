import React from 'react';
import './ScheduleMeetButton.css';

const ScheduleMeetButton = ({ time }) => {
    const handleSchedule = () => {
        
        alert(`Scheduling a 2-hour meeting at ${time.toLocaleString()}`);
    };

    return (
        <button className="schedule-meet-button" onClick={handleSchedule}>
            Schedule Meet
        </button>
    );
};

export default ScheduleMeetButton;
