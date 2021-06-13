import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from './../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated !</p> : <p>Please log in first</p>}
                <p onClick={this.props.click}>I'm a {this.props.name}! My power is {this.props.power}.</p>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                />
            </Aux>
        );
    };

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    power: PropTypes.string,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);