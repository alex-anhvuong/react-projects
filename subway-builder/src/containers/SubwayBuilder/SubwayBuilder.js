import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Subway from '../../components/Subway/Subway';
import BuildControls from '../../components/Subway/BuildControls/BuildControls';

class SubwayBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                meat: 0,
                cheese: 0,
                salad: 0,
                bacon: 0,
            }
        }
    }

    render() {
        return (
            <Aux>
                <div>Subway</div>
                <Subway ingredients={this.state.ingredients}></Subway>
                <BuildControls></BuildControls>
            </Aux>
        );
    }
}

export default SubwayBuilder;