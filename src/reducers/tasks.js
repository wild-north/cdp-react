import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    tasks: Immutable.Map({
        0: { id: 0, categoryId: 0, name: 'Task 1', description: 'this is the first task', isActive: true },
        1: { id: 1, categoryId: 0, name: 'Task 2', description: 'this is the second task', isActive: true },
        2: { id: 2, categoryId: 0, name: 'Task 3', description: 'this is the third task', isActive: true },
    })
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};


// function addTask (state, { name, catId }) {
//     // const newState = JSON.parse(JSON.stringify(state));
//     //
//     // const id = (+getLastKeyOfCollection(newState.tasks) + 1) || 0;
//     //
//     // newState.tasks[id] = new Task(id, name, catId, 'no description');
//     //
//     // return newState;
// }