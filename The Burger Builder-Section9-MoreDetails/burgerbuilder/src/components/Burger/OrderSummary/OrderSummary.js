import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../../components/UI/Button/Button';

const orderSummary=(props)=>{
 const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{

 return <li key ={igKey}>
            <span style={{transform:'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span>
        </li>
 });

 return (
            <Aux>
                <h3>Your order summary</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <p>Do you want to checkout?</p>
                <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={props.purchaseContinue}>CONTINUE</Button>
            </Aux>
 )
};
export default orderSummary;