import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Category } from '../helpers/models';

export const defaultState = {
    categories: {
        0: (new Category(0,     'Frontend',     null,   [2,3,4,5]   )),
        1: (new Category(1,     'Markup',       null,   [11,12]     )),
        2: (new Category(2,     'ES6',          0,      []          )),
        3: (new Category(3,     'React',        0,      [6,7,8]     )),
        4: (new Category(4,     'Redux',        0,      []          )),
        5: (new Category(5,     'Angular',      0,      []          )),
        6: (new Category(6,     'Components',   3,      [9,10]      )),
        7: (new Category(7,     'Life cycle',   3,      []          )),
        8: (new Category(8,     'Routing',      3,      []          )),
        9: (new Category(9,     'Stateful',     6,      []          )),
       10: (new Category(10,    'Stateless',    6,      []          )),
       11: (new Category(11,    'HTML5',        1,      []          )),
       12: (new Category(12,    'CSS3',         1,      [13]        )),
       13: (new Category(13,    'Flexbox',     12,      []          )),

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
/* EOF testing Redux */