import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  bacon: 0.8,
  meat: 1,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 2,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  }

  updatePurchaseUpdate (ingredients) {
    
    const sum = Object.keys(ingredients)
      .map( igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseUpdate(updatedIngredients);
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0){
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseUpdate(updatedIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
        <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              disabled={disabledInfo}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              ingredientRemoved={this.removeIngredientHandler}
              ingredientAdded={this.addIngredientHandler}/>

        </Aux>);
  }
};

export default  BurgerBuilder;
