import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Category } from '../helpers/models';

export const defaultState = {
    categories: {
        0: (new Category(0, 'cat 1',    null)),
        1: (new Category(1, 'cat 2',    null)),
        2: (new Category(2, 'cat 3',    null)),
        3: (new Category(3, 'cat 4',    null)),
        4: (new Category(4, 'cat 4.1',  3)),
    },
    tasks: {},
    progress: 30,
    selectedCategoryId: 0,
    selectedTaskId: null,
    isSidebarOpen: true
};

export const store = createStore(rootReducer, defaultState);


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
store.subscribe(() => console.log(store.getState()));
/* EOF testing Redux */