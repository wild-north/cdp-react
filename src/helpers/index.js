import { isNumber } from 'lodash';
import { SEPARATOR } from '../constants';

export const omitEvent = fn => (ev, ...params) => fn(...params);

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;