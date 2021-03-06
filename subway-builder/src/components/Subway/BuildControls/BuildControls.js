import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {controls.map(ctrl => <BuildControl {...ctrl} />)}
        </div>
    );
}

export default buildControls;