import { SET_TOOD_INPUTS, ADD_TOOD } from "./constants";

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TOOD_INPUTS:
            return {
                ...state,
                todoInput: action.payload,
            }

        case ADD_TOOD:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        default:
            throw new Error("Invalid action type: " + action.type)
    }
}

export { initState };
export default reducer;
