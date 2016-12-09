import { isArray, isObject, isString } from 'lodash';
import { SEPARATOR, LINK_SEPARATOR } from '../constants';

class CategegoryModel {
    constructor(title) {
        this.title = title;
        this.opened = false;
        this.kids = [];
    }
}
const getSeparator = (key) => key.indexOf(SEPARATOR) !== -1 ? SEPARATOR : LINK_SEPARATOR;

export const getFullPath = (list, key) => {
    key = (isString(key) ? key : key.toString());

    const SEP = getSeparator(key);
    const indexes = key.split(SEP).map(val => val - 1);

    let path = [];
    /* should I use reduce here? */
    indexes.forEach(index => {
        path.push( path.length ? path[path.length - 1].kids[index] : list[index] );
    });
    return path;
};
const getParentCategoryByKey = (list, key) => {
    const path = getFullPath(list, key);
    /* return element before last */
    return path[path.length - 2];
};
export const getCategoryByKey = (list, key) => {
    const path = getFullPath(list, key);
    /* return last element */
    return path[path.length - 1];
};
export const toggleCategory = (list, key) => {
    list = list.slice();
    const category = getCategoryByKey(list, key);
    if (isObject(category) && 'opened' in category) {
        category.opened = !category.opened;
    }
    return list;
};

export const removeCategory = (list, key) => {
    if (!confirm('Delete this item?')) return list;
    list = list.slice();

    const SEP = getSeparator(key);
    const indexes = key.split(SEP).map(val => +val - 1);
    const indexOfItemToBeDeleted = indexes[indexes.length - 1];
    const parentCategory = getParentCategoryByKey(list, key) || list;

    if (isArray(parentCategory)) {
        parentCategory.splice(indexOfItemToBeDeleted, 1);
    } else if (isArray(parentCategory.kids)) {
        parentCategory.kids.splice(indexOfItemToBeDeleted, 1);
    }

    return list;
};

export const renameCategory = (list, key, newTitle) => {
    if (!confirm('Edit this item?')) return list;
    list = list.slice();
    newTitle = newTitle.trim();
    const category = getCategoryByKey(list, key);

    if (isObject(category) && 'title' in category) {
        category.title = newTitle;
    }
    return list;
};

export const addSubCategory = (list, key, newTitle) => {

    list = list.slice();
    newTitle = newTitle.trim();

    const category = getCategoryByKey(list, key);

    if (isObject(category)) {
        category.opened = true;
        category.kids = isArray(category.kids) ? category.kids : [];
        category.kids.push( new CategegoryModel(newTitle) );
    }
    return list;
};
export const addCategory = (list, newTitle) => {
    list = list.slice();
    list.unshift( new CategegoryModel(newTitle) );
    return list;
};
export const toggleProject = (category, index) => {
    category.projects[index].isActive = !category.projects[index].isActive;
    return category;
};