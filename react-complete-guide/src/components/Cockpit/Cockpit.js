import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/authContext';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Fake http request');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect #2');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect #2');
        }
    });

    let btnClasses = [styles.button];
    if (props.showPersons) {
        btnClasses.push(styles.red);
    }
    const classes = [];
    props.personsLength > 2 || classes.push(styles.red);
    props.personsLength > 1 || classes.push(styles.bold);

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>Do we have enough people?</p>
            <button ref={toggleBtnRef} className={btnClasses.join(' ')} onClick={props.clicked}>
                {props.showPersons ? 'Hide' : 'Show'} Persons
            </button>
            <button onClick={authContext.login}>Log In</button>

        </div>
    );
}

export default React.memo(Cockpit);