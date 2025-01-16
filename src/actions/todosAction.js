import axios  from 'axios';
import { GET_TODOS_FAIELD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../contants/todosConstant';

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
        const res = await axios.get('http://localhost:8000/api/pizza/getAllpizzas', config);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data.pizzas });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAIELD, payload: error.message });
    }
};
