import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from "../contants/todosConstant";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) :
        []
};

const cartReducer = (state = {
    initialState
}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const alreadyExist = state.cartItems.find(item => item._id === action.payload._id)

            if (alreadyExist) {
                const updatedCartItems = state.cartItems.map(item =>
                    item._id === action.payload._id ? action.payload : item
                );

                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            } else {
                const updatedCartItems = [...state.cartItems, action.payload];

                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            }

            case DELETE_FROM_CART: {
                const updatedCartItems = state.cartItems.filter(item => item._id !== action.payload._id);

                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            }


            default:
                return state;
    }
};

export default cartReducer;