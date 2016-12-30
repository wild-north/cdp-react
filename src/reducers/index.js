import { combineReducers } from 'redux';
import main from './main';
import header from './header';

export default combineReducers({
    header,
    main
});