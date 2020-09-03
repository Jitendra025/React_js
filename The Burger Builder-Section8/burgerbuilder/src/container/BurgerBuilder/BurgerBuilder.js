import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE={
    salad: 0.5, // PRICE IN DOLLERS
    bacon: 0.5,
    cheese: 1,
    meat: 0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,// assume initial price of the nurger without any topping is 4 dollers,
        purchasable:false,
        purchasing:false
    }

    updatePurchasble=(ingredients)=>{
        // Object.keys(ingredients) will convert ingredients into and array and then on array we applied map function on each element of array
        const sum = Object.keys(ingredients).map(igKey=>{
                return ingredients[igKey];
        })
        .reduce((total,element)=>{
            return total+element;
        },0); // default 0
        this.setState({purchasable:sum>0}) // sum>0 will result in either 0 or 1
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true}) 
    }
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false}) ;
    }
    purchaseContinueHandler =()=>{
       alert('You Continue!');
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount= oldCount+1;
        const updatedIngredient={ // we sholde update state in immutable way, so we should take state in a variable first , update variable and then assign the updated variable for new
            ...this.state.ingredients
        };// type here is the name of key in ingredient like salad, meat etc
        updatedIngredient[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice= oldPrice+INGREDIENTS_PRICE[type];

        // update state with new values
        this.setState({totalPrice:updatedPrice, ingredients:updatedIngredient});

        this.updatePurchasble(updatedIngredient); // re calculate value of purchasable as soon as ingredient added or removed

    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount= oldCount-1;
        const updatedIngredient={ // we sholde update state in immutable way, so we should take state in a variable first , update variable and then assign the updated variable for new
            ...this.state.ingredients
        };// type here is the name of key in ingredient like salad, meat etc
        updatedIngredient[type]=updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice= oldPrice-INGREDIENTS_PRICE[type];

        // update state with new values
        this.setState({totalPrice:updatedPrice, ingredients:updatedIngredient});
        this.updatePurchasble(updatedIngredient); // re calculate value of purchasable as soon as ingredient added or removed

    }
    render() {

        const disablesInfo={
            ...this.state.ingredients
        }
        for(let key in disablesInfo)
        {
            disablesInfo[key]=disablesInfo[key]<=0 // This statement will set the value as true or false for agqainst the key. The statment disablesInfo[key]<=0 either will be true or false and
                                                   // and same value will be assinged to key.
                                                   // The disableInfo will result something like below
                                                   // {salad:true, meat:false, bacon:false, cheese:true} based on the count of ingredient. if salad is 0 then true means disable the Less button as ther
                                                   // is nothing to delete for salad
        }
        return (
        <Aux>
            <Modal show={this.state.purchasing}
            modelClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                ingredients={this.state.ingredients}>
                </OrderSummary>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled={disablesInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
        </Aux>
        );
    };
}
export default BurgerBuilder;