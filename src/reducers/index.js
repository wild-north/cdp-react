import { addCategory } from '../helpers/categories';
import { addTask } from '../helpers/tasks';
import { setProgress } from '../helpers/common';
import { defaultState } from '../store';

const rootReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case 'ADD_TASK':
            return addTask(state, payload);
        case 'ADD_CATEGORY':
            return addCategory(state, payload);
        case 'SET_PROGRESS':
            return setProgress(state, payload);
        default:
            return state;
    }
};



export default rootReducer;