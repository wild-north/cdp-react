import { isArray, isObject, includes } from 'lodash';
import { SEPARATOR } from '../constants';

class CategegoryModel {
    constructor(title) {
        this.title = title;
        this.opened = false;
        this.kids = [];
    }

}

export const toggleCategory = (indexesString, list) => {
    list = list.slice();

    /* get [1,0,1] from '1.0.1' */
    const indexArray = indexesString.split(SEPARATOR);

    let currentValue;
    indexArray.forEach(index => {
        currentValue = currentValue ? currentValue.kids[index - 1] : list[index - 1];
    });

    if (typeof currentValue === 'object' && 'opened' in currentValue) {
        currentValue.opened = !currentValue.opened;
        console.info(`'${indexesString} ${currentValue.title}' ${currentValue.opened ? ' opened' : ' closed'}`);
    }
    return list;
};

export const removeCategory = (indexesString, list) => {
    if (!confirm('Delete this item?')) return list;

    list = list.slice();

    const indexes = indexesString.split(SEPARATOR).map(val => +val - 1);
    const indexOfItemToBeDeleted = indexes[indexes.length - 1];

    let currentItem;
    for (let i = 0; i < indexes.length - 1; i++) {
        let index = indexes[i];
        currentItem = currentItem ? currentItem.kids[index] : list[index];
    }
    currentItem = currentItem || list;


    if (isArray(currentItem)) {
        currentItem.splice(indexOfItemToBeDeleted, 1);
    } else if (isArray(currentItem.kids)) {
        currentItem.kids.splice(indexOfItemToBeDeleted, 1);
    }

    return list;
};

export const renameCategory = (indexesString, list, newTitle) => {
    if (!confirm('Edit this item?')) return list;

    list = list.slice();
    newTitle = newTitle.trim();

    const indexArray = indexesString.split(SEPARATOR);

    let currentValue;
    indexArray.forEach(index => {
        currentValue = currentValue ? currentValue.kids[index - 1] : list[index - 1];
    });
    if (isObject(currentValue) && 'title' in currentValue) {
        currentValue.title = newTitle;
    }
    return list;
};

export const addCategory = (indexesString, list, newTitle) => {

    list = list.slice();
    newTitle = newTitle.trim();

    const indexArray = indexesString.split(SEPARATOR);

    let currentValue;
    indexArray.forEach(index => {
        currentValue = currentValue ? currentValue.kids[index - 1] : list[index - 1];
    });

    if (isObject(currentValue)) {
        currentValue.opened = true;
        currentValue.kids = isArray(currentValue.kids) ? currentValue.kids : [];
        currentValue.kids.push( new CategegoryModel(newTitle) );
    }
    console.log(list);
    return list;
};