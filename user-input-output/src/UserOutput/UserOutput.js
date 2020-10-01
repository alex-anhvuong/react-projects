import React from 'react';

import './UserOutput.css';

function UserOutput(props) {
    return (
        <div className='UserOutput'>
            <p>Username: {props.userName}</p>
            <p>A.k.a {props.codeName}</p>
        </div>
    );
}

export default UserOutput;