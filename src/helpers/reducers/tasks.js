// import { cloneDeep } from 'lodash';
import { Task } from '../models';
import { getLastKeyOfCollection } from '../index';

export const addTask = (state, { name, catId }) => {
    const newState = JSON.parse(JSON.stringify(state));

    const id = (+getLastKeyOfCollection(newState.tasks) + 1) || 0;

    newState.tasks[id] = new Task(id, name, catId, 'no description');

    return newState;
};