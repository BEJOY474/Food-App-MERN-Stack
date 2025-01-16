import axios from "axios";
import {
  USER_ORDER_REQUEST,
  USER_ORDER_SUCCESS,
  USER_ORDER_FAILED,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_FAILED,
} from "../contants/todosConstant";

//register
export const placeOrder =
  (token, totalPrice, currentUser, cartItems) => async (dispatch, getState) => {
    dispatch({ type: USER_ORDER_REQUEST });

    try {
    
      const response = await axios.post(
        "http://localhost:8000/api/users/order/placeorder",
        { token, totalPrice, currentUser, cartItems }
      );
      dispatch({ type: USER_ORDER_SUCCESS }); //,  payload: response.data
    } catch (error) {
      // Dispatch error
      dispatch({
        type: USER_ORDER_FAILED,
        error,
        //,
        // payload: error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
      console.log("Error : ", error);
    }
  };


export const getUserOrders = (id) => async (dispatch, getState) => {
 // const currentUser = getState.loginUserReducer.currentUser
      dispatch({ type: GET_USER_ORDER_REQUEST });
      try {
          // const config = {
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //   };
          const res = await axios.post('http://localhost:8000/api/users/order/getAllUserOrders',{userid : id } );
          console.log("Response : ", res)
          dispatch({ type: GET_USER_ORDER_SUCCESS, payload: res.data.orders });
      } catch (error) {
          dispatch({ type: GET_USER_ORDER_FAILED, payload: error.message });
      }
  };
  
