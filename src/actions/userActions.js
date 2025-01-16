import axios from 'axios'

import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../contants/todosConstant"
import { useNavigate } from 'react-router-dom';

//register
export const registerUser = (user)=>async (dispatch)=>{
    dispatch({type : USER_REGISTER_REQUEST})
    
    try {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
       const response = await axios.post('http://localhost:8000/api/users/register', user, config)
     
        dispatch({type : USER_REGISTER_SUCCESS,  payload: response.data})
    } catch (error) {
         // Dispatch error
         dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
          });
    }
}

//login
export const loginUser = (user)=>async (dispatch)=>{
 
    dispatch({type : USER_LOGIN_REQUEST})

    try {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
       const response = await axios.post('http://localhost:8000/api/users/userLog', user, config)
     
        dispatch({type : USER_LOGIN_SUCCESS, payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data));
         window.location.href='/'
      
    } catch (error) {
         // Dispatch error
         dispatch({
            type: USER_LOGIN_FAILED,
            payload: error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
          });
    }

}

//logout
export const logoutUser = ()=>(dispatch)=>{
  
        localStorage.removeItem('currentUser')
        window.location.href='/'
   
}