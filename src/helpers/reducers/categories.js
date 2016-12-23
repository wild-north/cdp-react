import Immutable from 'immutable';
import { Category } from '../models';
import { keys, forEach } from 'lodash';


export const toggleCategory = (state, id) => state.updateIn(['categories', `${id}`, 'opened'], opened => !opened);
export const renameCategory = (state, { id, name:newName }) => state.updateIn(['categories', `${id}`, 'name'], name => newName);;
export const getLastKeyOfCollection = (collection) => {
    const keysList = keys(collection);
    return keysList[keysList.length - 1];
};
export const addCategory = (state, { parentId, name }) => {
    name = name || prompt('Enter sub-category name', 'New category');
    const id = (Number(getLastKeyOfCollection(state.get('categories').toJS())) + 1).toString();
    return state.updateIn(['categories'], categories => categories.set(id, Immutable.Map(new Category(id, name, parentId))))
};

const deleteCategoryRecursive = (categories, id) => {
    if (!categories || !(id in categories)) {
        return categories;
    }
    delete categories[id];
    forEach(categories, ({ parentId }) => {
        if (parentId === id) {
            categories = deleteCategoryRecursive(categories, parentId);
        }
    });
    return categories;
};
export const removeCategory = (state, id) => {
    if (!confirm('Are you sure?')) return state;
    return state.set('categories', Immutable.fromJS(deleteCategoryRecursive(state.get('categories').toJS(), id)));
};
export const selectCategory = (state, id) => state.set('selectedCategoryId', id);

