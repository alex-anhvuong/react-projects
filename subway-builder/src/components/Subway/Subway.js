import React from 'react';
import styles from './Subway.module.css';
import SubwayIngredient from './SubwayIngredient/SubwayIngredient';

const subway = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])]
            .map((_, i) => <SubwayIngredient key={igKey + i} type={igKey}></SubwayIngredient>))
        .reduce((arr, el) => { return arr.concat(el) }, []);

    if (transformedIngredients.length === 0) transformedIngredients = <p>Please add ingredients</p>;

    return (
        <div className={styles.Subway}>
            <SubwayIngredient type="bread-top"></SubwayIngredient>
            {transformedIngredients}
            <SubwayIngredient type="bread-bottom"></SubwayIngredient>
        </div>
    );
}

export default subway;