import { Category } from './models';
import { cloneDeep, forEach, isUndefined, isNull, indexOf, remove } from 'lodash';

export const addCategory = (state, { parentId, name }) => {
    // const newState = cloneDeep(state);
    const newState = Object.assign({}, state);
    let keys = Object.keys(newState.categories);
    const id = +keys[keys.length - 1] + 1;
    newState.categories[id] = new Category(id, name, parentId);
    newState.categories[parentId].kids.push(id);
    return newState;
};
export const toggleCategory = (state, id) => {
    // const newState = cloneDeep(state);
    const newState = Object.assign({}, state);
    newState.categories[id].opened = !newState.categories[id].opened;
    return newState;
};
export const renameCategory = (state, { id, name }) => {
    // const newState = cloneDeep(state);
    const newState = Object.assign({}, state);
    newState.categories[id].name = name;
    return newState;
};
export const removeCategory = (state, id) => {
    if (!confirm('Are you sure?')) return state;
    // const newState = cloneDeep(state);
    const newState = Object.assign({}, state);
    deleteCategoryRecursive(newState.categories, id);
    return newState;
};
export const selectCategory = (state, id) => {
    // const newState = cloneDeep(state);
    const newState = Object.assign({}, state);
    newState.selectedCategoryId = id;
    return newState;
};

function deleteCategoryRecursive(list, id) {
    if (isUndefined(list[id])) return;
    forEach(list[id].kidsIds, id => {
        deleteCategoryRecursive(list, id);
    });
    // debugger;
    const parentElement = list[list[id].parentId];
    if (parentElement) {
        const iof = indexOf(parentElement.kidsIds, id);
        if (iof !== -1) {
            remove(parentElement.kidsIds, _id => _id === id);
        }   
    }
    delete list[id];
}

