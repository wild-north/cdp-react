import { Task } from './models';
import { getLastKeyOfCollection } from './index';

export const addTask = (state, { name, catId }) => {
    const newState = Object.assign({}, state);

    const id = (parseInt(getLastKeyOfCollection(state.tasks), 10) + 1) || 0;

    state.tasks[id] = new Task(id, name, catId, 'no description');

    return newState;
};