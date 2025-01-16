import { ADD_TO_CART, DELETE_FROM_CART } from "../contants/todosConstant";
import cartReducer from './../reducers/cardReduser';

export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
    const cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        variant: variant,
        quantity: Number(quantity) ,
        prices: pizza.prices,
        price: pizza.prices[0][variant] * quantity
    };


    dispatch({
        type: ADD_TO_CART,
        payload: cartItem
     });
  

    // store items localStorage 
    const { cart: { cartItems } } = getState();
  //  const  { cartItems }  = getState().cartReducer;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => (dispatch) => {
    console.log('Dispatching DELETE_FROM_CART with:', pizza);
    dispatch({ type: DELETE_FROM_CART, payload: pizza });
};


