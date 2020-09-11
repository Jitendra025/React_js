import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../../src/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE={
    salad: 0.5, // PRICE IN DOLLERS
    bacon: 0.5,
    cheese: 1,
    meat: 0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice:4,// assume initial price of the nurger without any topping is 4 dollers,
        purchasable:false,
        purchasing:false,
        loadingProgress: false,
        error: false

    }
    componentDidMount(){
        axios.get('https://react-my-burger-20231.firebaseio.com/ingredients.json')
                .then(response=>{
                    this.setState({ingredients:response.data});
                    this.updatePurchasble(this.state.ingredients);
                })
                .catch(error=>{
                    this.setState({error:true})
                })
    }

    updatePurchasble=(ingredients)=>{
        // Object.keys(ingredients) will convert ingredients into and array and then on array we applied map function on each element of array
        const sum = Object.keys(ingredients).map(igKey=>{
                return ingredients[igKey];
        })
        .reduce((total,element)=>{
            return total+element;
        },0); // default 0
        this.setState({purchasable:sum>0}) // sum>0 will result in either 0 or 1 (true or false)
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true}) 
    }
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false}) ;
    }
    purchaseContinueHandler =()=>{
        this.setState({loadingProgress:true});
       const order={
        ingredients:this.state.ingredients,
        price:this.state.totalPrice,
        customer:{
            name: 'Jhon Cena',
            address:{
                street:'Test street1',
                zipcode:'123456',
                country:'United Kingdom'
            },
            email:'abc@abc.com',
            deliveryMethod:'fastest'
        }
       }
       axios.post('/order.json',order)
            .then(response=>{
                this.setState({loadingProgress:false, purchasing:false});
            })
            .catch(error=>{
                this.setState({loadingProgress:false, purchasing:false});
            })
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
        let orderSummary=null;
        let burger=this.state.error?<p>Ingredient can't be loaded</p>:<Spinner/>;
        if(this.state.ingredients)
        {
            burger=(
                <Aux>
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
            orderSummary=<OrderSummary 
                            price={this.state.totalPrice}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinue={this.purchaseContinueHandler}
                            ingredients={this.state.ingredients}>
                        </OrderSummary>;
        }
        if(this.state.loadingProgress)
        {
            orderSummary=<Spinner/>;
        }
        return (
        <Aux>
            <Modal show={this.state.purchasing}
            modelClosed={this.purchaseCancelHandler}>
               {orderSummary} 
            </Modal>
            {burger}
        </Aux>
        );
    };
}
export default WithErrorHandler(BurgerBuilder,axios);