import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <button className={`nums-btn ${props.bgColor}`}>{props.text}</button>
    );
};

export default NumberButton;