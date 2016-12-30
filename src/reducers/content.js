import Immutable from 'immutable';
import { Task } from '../models';


const defaultState = Immutable.Map({
    tasks: Immutable.Map({
         '0': Immutable.Map((new Task(   '0',   'Task 0',    '0' ))),
         '1': Immutable.Map((new Task(   '1',   'Task 1',    '1' ))),
         '2': Immutable.Map((new Task(   '2',   'Task 2',    '2' ))),
         '3': Immutable.Map((new Task(   '3',   'Task 3',    '3' ))),
         '4': Immutable.Map((new Task(   '4',   'Task 4',    '4' ))),
         '5': Immutable.Map((new Task(   '5',   'Task 5',    '5' ))),
         '6': Immutable.Map((new Task(   '6',   'Task 6',    '6' ))),
         '7': Immutable.Map((new Task(   '7',   'Task 7',    '7' ))),
         '8': Immutable.Map((new Task(   '8',   'Task 8',    '8' ))),
         '9': Immutable.Map((new Task(   '9',   'Task 9',    '9' ))),
        '10': Immutable.Map((new Task(  '10',  'Task 10',   '10' ))),
        '11': Immutable.Map((new Task(  '11',  'Task 11',   '11' ))),
        '12': Immutable.Map((new Task(  '12',  'Task 12',   '12' ))),
        '13': Immutable.Map((new Task(  '13',  'Task 13',   '13' ))),
        '14': Immutable.Map((new Task(  '14',  'Task 14',    '0' ))),
    }),
    selectedProjectId: null
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'COMPLETE_TASK':
            return changeTaskActivity(state, payload, false);
        case 'UNCOMPLETE_TASK':
            return changeTaskActivity(state, payload, true);
        case 'SELECT_TASK':
            return selectTask(state, payload);
        default:
            return state;
    }
};

function changeTaskActivity(state, id, value = true) {
    return state.setIn(['tasks', id, 'isActive'], value);
}
function selectTask(state, id = null) {
    return state.set('selectedProjectId', id);
}