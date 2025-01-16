import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from "./reducers/todosReducer";
import cartReducer from "./reducers/cardReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { getOrderUserReducer, placeOrderUserReducer } from "./reducers/orderReduser";

const finalReduser = combineReducers({
  todosReducer: todosReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  getOrderUserReducer : getOrderUserReducer,
  placeOrderUserReducer: placeOrderUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialstate = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReduser,
  initialstate,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
