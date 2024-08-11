import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const DatePicker = ({ time, onTimeChange }) => {
    return (
        <div className="date-picker">
            <ReactDatePicker 
                selected={time} 
                onChange={date => onTimeChange(date)} 
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    );
};

export default DatePicker;
