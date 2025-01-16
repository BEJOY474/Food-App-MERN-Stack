import { GET_USER_ORDER_FAILED, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, USER_ORDER_FAILED, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "../contants/todosConstant";

export const placeOrderUserReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_ORDER_REQUEST:
        return { loading: true };
      case USER_ORDER_SUCCESS:
        return { loading: false, success: true};
      case USER_ORDER_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

export const getOrderUserReducer = (state = {orders : []}, action) => {
  switch (action.type) {
    case GET_USER_ORDER_REQUEST:
      return { loading: true };
    case GET_USER_ORDER_SUCCESS:
      return { loading: false,orders : action.payload, success: true};
    case GET_USER_ORDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};