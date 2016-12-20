import { map, reduce, isNull, isArray, isNumber, isUndefined, groupBy, forEach, noop } from 'lodash';
import { SEPARATOR } from '../constants';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;

export const getLastKeyOfCollection = collection => {
    const keys = Object.keys(collection);
    return keys[keys.length - 1];
};

export const unflattenTree = (list) => {
    /* MAGIC: please, keep out */
    const copy = JSON.parse(JSON.stringify(list));
    forEach(groupBy(copy, 'parentId'), (group, key) => {
        if (copy[key]) {
            copy[key].kids = group;
        }
    });
    return reduce(copy, (acc, item) => {
        if (isNull(item.parentId)) {
            acc.push(item)
        }
        return acc;
    }, []);
};
