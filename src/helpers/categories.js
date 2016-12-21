import Immutable from 'immutable';
import { Category } from './models';
import { map, forEach, isUndefined, indexOf, remove, uniqueId } from 'lodash';


export const toggleCategory = (state, id) => {
    return state.updateIn(['categories', `${id}`, 'opened'], opened => !opened);
};


export const addCategory = (state, { parentId, name }) => {
    const keys = Object.keys(state.get('categories').toJS());
    const id = +keys[keys.length - 1] + 1;
    return state.updateIn(['categories'], categories => {
        return categories.set(id, Immutable.Map(new Category(id, name, parentId)))
    });
};
export const renameCategory = (state, { id, name }) => {
    const categories = JSON.parse(JSON.stringify(state.categories));
    categories[id].name = name;
    return Object.assign({}, state, { categories: categories });
};
export const removeCategory = (state, id) => {
    if (!confirm('Are you sure?')) return state;
    const categories = JSON.parse(JSON.stringify(state.categories));
    deleteCategoryRecursive(categories, id);
    return Object.assign({}, state, { categories: categories });
};
export const selectCategory = (state, id) => {
    const newState = Object.assign({}, state);
    newState.selectedCategoryId = id;
    return newState;
};

const deleteCategoryRecursive = (list, id) => {
    if (isUndefined(list[id])) return;
    forEach(list[id].kidsIds, id => {
        deleteCategoryRecursive(list, id);
    });
    const parentElement = list[list[id].parentId];
    if (parentElement) {
        const iof = indexOf(parentElement.kidsIds, id);
        if (iof !== -1) {
            remove(parentElement.kidsIds, _id => _id === id);
        }
    }
    delete list[id];
};

