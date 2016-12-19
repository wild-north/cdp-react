import { map, reduce, isNull, isArray, isNumber, isUndefined, groupBy, forEach } from 'lodash';
import { SEPARATOR } from '../constants';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;

export const getLastKeyOfCollection = collection => {
    const keys = Object.keys(collection);
    return keys[keys.length - 1];
};

export const unflattenTree = (list) => {

    const copy = JSON.parse(JSON.stringify(list));

    map(list, item => {
        const parent = copy[item.parentId];
        if (!isUndefined(parent)) {
            parent.kids = isArray(parent.kids) ? parent.kids : [];
            parent.kids.push(item);
        }
    });
    return reduce(copy, (acc, item) => {
        if (isNull(item.parentId)) {
            acc.push(item);
        }
        return acc;
    }, []);
};
