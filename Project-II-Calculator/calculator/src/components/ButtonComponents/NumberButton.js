import React from 'react';
import './Button.css';


const NumberButton = () => {
    return (

        <div className='num'>

        <span className='row3'>
            <button name='7'>7</button>
            <button name='8'>8</button>
            <button name='9'>9</button><br/>
        </span>

        <span className='row4'>
            <button name='4'>4</button>
            <button name='5'>5</button>
            <button name='6'>6</button><br/>
        </span>

        <span className='row5'>
            <button name='1'>1</button>
            <button name='2'>2</button>
            <button name='3'>3</button><br/>
        </span>

        <span className='row6'>
            <button name='0'>0</button>
        </span>


        </div>
    );
};

export default NumberButton;