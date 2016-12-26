import { combineReducers } from 'redux';
import sidebar from './sidebar';
import tasks from './tasks';
import header from './header';
import category from './category';

export default combineReducers({
    header,
    sidebar,
    tasks,
    category
});