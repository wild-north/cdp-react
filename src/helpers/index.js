import { includes, reduce, isNull, isNumber, groupBy, forEach, cloneDeep } from 'lodash';
import { SEPARATOR, LINK_SEPARATOR } from '../constants';

export const getSeparator = (string) => includes(string, LINK_SEPARATOR) ? LINK_SEPARATOR : SEPARATOR;
export const replaceSeparators = (string, from, to) => string.split(from).join(to);

export const getFullIndex = (parentIndex, index) => {
    return (isNumber(parentIndex) ? parentIndex + getSeparator(parentIndex) : '') + index
};

export const unflattenTree = (list) => {
    /** MAGIC: please, do not touch */
    const copy = cloneDeep(list);
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