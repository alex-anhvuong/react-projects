import React, { Component } from 'react';

class UserInput extends Component {


    render() {
        const inputStyle = {
            backgroundColor: 'darkblue',
            color: 'white',
        }

        return (
            <div>
                <input style={inputStyle} type="text" onChange={this.props.changed} value={this.props.userName} />
            </div>
        );
    }
}

export default UserInput;