import { Category } from './models';
import { getLastKeyOfCollection } from './index';

export const addCategory = (state, { name, parentId }) => {
    const newState = Object.assign({}, state);

    const id = (parseInt(getLastKeyOfCollection(state.categories), 10) + 1) || 0;

    state.categories[id] = new Category(id, name, parentId);

    return newState;
};