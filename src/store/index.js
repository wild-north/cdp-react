import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Category } from '../helpers/models';
import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({
    
    tasks: {},
    progress: 30,
    selectedTaskId: null,
    isSidebarOpen: true
});

export const store = createStore(rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/* testing Redux */
// import { addTask, addCategory, setProgress } from '../actions';
// store.dispatch(addTask('here the new task for you', 0));
// store.dispatch(addCategory('category 1', null));
// store.dispatch(addCategory('category 2', null));
// store.dispatch(addCategory('category 3', null));
// store.dispatch(setProgress(51));
// const newState = store.getState();
// console.table(newState.categories);
// console.table(newState.tasks);
// store.subscribe(() => console.log(store.getState()));
/* EOF testing Redux */