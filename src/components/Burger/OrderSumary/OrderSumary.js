import React from 'react';
import Aux from '../../../hox/Aux';

const orderSumary = (props) => {
    const ingredientsSumary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingredients:</p>
            <ul>
                {ingredientsSumary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
)};

export default orderSumary;
