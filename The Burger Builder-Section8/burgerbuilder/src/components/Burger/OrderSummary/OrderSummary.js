import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary=(props)=>{
 const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{

 return <li>
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
                <p>Do you want to checkout?</p>
            </Aux>
 )

};

export default orderSummary;