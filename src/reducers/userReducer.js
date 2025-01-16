import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../contants/todosConstant";


export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, success: true, message: action.payload };
      case USER_REGISTER_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};


export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
     
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, currentUser: action.payload ,error: null };
        case USER_LOGIN_FAILED:  // Update to 'FAILED'
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

//export default registerUserReducer;

