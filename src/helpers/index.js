import { forEach, map, reduce, isNull, isArray, isNumber, isUndefined, cloneDeep } from 'lodash';
import { SEPARATOR } from '../constants';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;

export const getLastKeyOfCollection = collection => {
    const keys = Object.keys(collection);
    return keys[keys.length - 1];
};

export const unflatTree = (list) => {
    // const copy = cloneDeep(list);
    const copy = Object.assign({}, list);

    map(list, item => {
        // item.kids = isArray(item.kids) ? item.kids : [];
        // forEach(item.kidsIds, id => {
        //     item.kids.push(list[id]); 
        // });
        const parent = copy[item.parentId];
        if (!isUndefined(parent)) {
            parent.kids = isArray(parent.kids) ? parent.kids : [];
            parent.kids.push(item);
        }
    });
    const flatten = reduce(copy, (acc, item) => {
        if (isNull(item.parentId)) {
            acc.push(item);
        }
        return acc;
    }, []);
    return flatten;
};
