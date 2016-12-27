import { combineReducers } from 'redux';
import sidebar from './sidebar';
import tasks from './tasks';
import header from './header';
import content from './content';

export default combineReducers({
    header,
    sidebar,
    tasks,
    content
});