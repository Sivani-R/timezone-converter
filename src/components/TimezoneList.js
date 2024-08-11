import React from 'react';
import TimezoneItem from './TimezoneItem';
import './TimezoneList.css';

const TimezoneList = ({ time, timezones, onRemove }) => {
    return (
        <div className="timezone-list">
            {timezones.map(tz => (
                <TimezoneItem key={tz} timezone={tz} time={time} onRemove={() => onRemove(tz)} />
            ))}
        </div>
    );
};

export default TimezoneList;
