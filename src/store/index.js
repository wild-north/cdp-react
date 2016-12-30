import { createStore } from 'redux';
import rootReducer from '../reducers';

export const store = createStore(rootReducer, {},
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
// store.subscribe(() => {
//     const { content, tasks, sidebar, header } = store.getState();
//     console.log('tasks', tasks.toJS());
//     console.log('sidebar', sidebar.toJS());
//     console.log('header', header.toJS());
//     console.log('content', content.toJS());
// });
/* EOF testing Redux */