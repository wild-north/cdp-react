import { createStore } from 'redux';
import rootReducer from '../reducers';

export const defaultState = {
    categories: {},
    tasks: {},
    progress: 0,
    selectedCategoryId: null,
    selectedTaskId: null,
    openedSidebar: true
};

export const store = createStore(rootReducer, defaultState);


/* testing Redux */
import { addTask, addCategory, setProgress } from '../actions';
store.dispatch(addTask('here the new task for you', 0));
store.dispatch(addCategory('category 1', null));
store.dispatch(addCategory('category 2', null));
store.dispatch(addCategory('category 3', null));
store.dispatch(setProgress(51));
const newState = store.getState();
console.table(newState.categories);
console.table(newState.tasks);

/* EOF testing Redux */