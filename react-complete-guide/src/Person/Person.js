import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm a {props.name}! My power is {props.power}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;