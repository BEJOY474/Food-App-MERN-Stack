import { GET_TODOS_FAIELD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../contants/todosConstant";

const initialState = {
    loading: false,
    todos: [],
    error: null,
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return { ...state, loading: true };
        case GET_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload, error: null};
        case GET_TODOS_FAIELD:
            return { ...state, loading: false, todos:[], error: action.payload };
        default:
            return state;
    }
};

export default todosReducer