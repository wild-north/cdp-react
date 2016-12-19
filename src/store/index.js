import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Category } from '../helpers/models';

export const defaultState = {
    categories: {
        0: (new Category(0, 'cat 1',        9, [1]      )),
        1: (new Category(1, 'cat 1.1',      0           )),
        2: (new Category(2, 'cat 2',        null        )),
        3: (new Category(3, 'cat 3',        null        )),
        4: (new Category(4, 'cat 4',        null,[5]    )),
        5: (new Category(5, 'cat 4.1',      4,   [6,7,8])),
        6: (new Category(6, 'cat 4.1.1',    5,   []     )),
        7: (new Category(7, 'cat 4.1.2',    5,   [9]    )),
        8: (new Category(8, 'cat 4.1.3',    5,   []     )),
        9: (new Category(9, 'cat 4.1.2.1',  7,   [0]    )),
    },
    tasks: {},
    progress: 30,
    selectedCategoryId: 0,
    selectedTaskId: null,
    isSidebarOpen: true
};

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
store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
/* EOF testing Redux */