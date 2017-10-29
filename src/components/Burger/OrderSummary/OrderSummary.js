import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSumary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burger with the following ingredients:</p>
            <h4><b>Total Price: {props.price.toFixed(2)}</b></h4>
            <ul>
                {ingredientsSumary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
)};

export default orderSummary;
