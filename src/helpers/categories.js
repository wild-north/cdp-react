import { Category } from './models';
import { map, forEach, isUndefined, indexOf, remove } from 'lodash';

export const addCategory = (state, { parentId, name }) => {
    const newState = Object.assign({}, state);
    let keys = Object.keys(newState.categories);
    const id = +keys[keys.length - 1] + 1;
    newState.categories[id] = new Category(id, name, parentId);
    newState.categories[parentId].kids.push(id);
    return newState;
};
export const toggleCategory = (state, id) => {
    return Object.assign({}, state, {
        categories: map(state.categories, category => {
            if (category.id === id) {
                return Object.assign({}, category, { opened: !category.opened });
            }
            return category;
        })
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

