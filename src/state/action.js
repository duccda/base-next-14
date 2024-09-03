import { SET_TOOD_INPUTS, ADD_TOOD } from './constants';

export const setTodoInput = payload => {
    return { type: SET_TOOD_INPUTS, payload };
}

export const addTodoInput = payload => {
    return { type: ADD_TOOD, payload };
}
