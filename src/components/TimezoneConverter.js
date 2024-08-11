import React, { useState } from 'react';
import TimezoneList from './TimezoneList';
import DatePicker from './DatePicker';
import DarkModeToggle from './DarkModeToggle';
import ScheduleMeetButton from './ScheduleMeetButton';
import './TimezoneConverter.css';

const TimezoneConverter = () => {
    const [time, setTime] = useState(new Date());
    const [timezones, setTimezones] = useState(["UTC", "IST", "PST", "EST"]);
    const [darkMode, setDarkMode] = useState(false);

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const addTimezone = (timezone) => {
        setTimezones([...timezones, timezone]);
    };

    const removeTimezone = (timezone) => {
        setTimezones(timezones.filter(tz => tz !== timezone));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`converter-container ${darkMode ? 'dark' : ''}`}>
            <DatePicker time={time} onTimeChange={handleTimeChange} />
            <TimezoneList 
                time={time} 
                timezones={timezones} 
                onRemove={removeTimezone} 
                onAdd={addTimezone} 
            />
            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            <ScheduleMeetButton time={time} />
        </div>
    );
};

export default TimezoneConverter;
