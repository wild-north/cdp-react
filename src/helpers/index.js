import { includes, reduce, isNull, groupBy, forEach, cloneDeep, chunk } from 'lodash';
import { SEPARATOR, LINK_SEPARATOR } from '../constants';

export const getSeparator = (string) => includes(string, LINK_SEPARATOR) ? LINK_SEPARATOR : SEPARATOR;
// export const replaceSeparators = (string, from, to) => string.split(from).join(to);
export const getFullIndex = (parentIndex, index) => parentIndex ? `${parentIndex}${getSeparator(parentIndex)}${index}` : `${index}`;


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
export const parseUrlHash = () => {
    const URL_SEPARATOR = '/';
    return chunk(window.location.hash.split(URL_SEPARATOR).slice(1), 2).reduce((acc, pairArr) => {
        acc[pairArr[0]] = pairArr[1];
        return acc;
    }, {});
};

export const getProgressValue = (list) => {
    const data = reduce(list, (acc, item) => {
        if (item.done) {
            acc.completed++;
        }
        acc.total++;
        return acc;
    }, {
        completed: 0,
        total: 0
    });
    console.log(data);
    return data.completed / data.total * 100; 
};