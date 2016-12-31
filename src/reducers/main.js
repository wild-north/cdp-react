import Immutable from 'immutable';
import { Category, Task } from '../models';
import { forEach, uniqueId } from 'lodash';
import { parseUrlHash } from '../helpers';


const defaultState = Immutable.Map({
    categories: Immutable.Map({
        '0': Immutable.Map((new Category(   '0',     'Frontend',     null       ))),
        '1': Immutable.Map((new Category(   '1',     'Markup',       null       ))),
        '2': Immutable.Map((new Category(   '2',     'ES6',          '0'        ))),
        '3': Immutable.Map((new Category(   '3',     'React',        '0'        ))),
        '4': Immutable.Map((new Category(   '4',     'Redux',        '0'        ))),
        '5': Immutable.Map((new Category(   '5',     'Angular',      '0'        ))),
        '6': Immutable.Map((new Category(   '6',    'Components',   '3'        ))),
        '7': Immutable.Map((new Category(   '7',     'Life cycle',   '3'        ))),
        '8': Immutable.Map((new Category(   '8',     'Routing',      '3'        ))),
        '9': Immutable.Map((new Category(   '9',     'Stateful',     '6'        ))),
       '10': Immutable.Map((new Category(  '10',     'Stateless',    '6'        ))),
       '11': Immutable.Map((new Category(  '11',     'HTML5',        '1'        ))),
       '12': Immutable.Map((new Category(  '12',     'CSS3',         '1'        ))),
       '13': Immutable.Map((new Category(  '13',     'Flexbox',     '12'        )))
    }),
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
    selectedProjectId: parseUrlHash().project || null,
    selectedCategoryId: parseUrlHash().category || '0',
    // editCategory: Immutable.fromJS({
    //     id: null,
    //     title: ''
    // }),
    // editProject: Immutable.fromJS({
    //     id: null,
    //     descripttion: '',
    //     name: ''
    // }),
    editCategoryId: null,
    tmpTitle: '',
    progress: 0,
    isSidebarOpen: true

});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'ADD_CATEGORY':
            return addCategory(state, payload);
        case 'REMOVE_CATEGORY':
            return removeCategory(state, payload);
        case 'RENAME_CATEGORY':
            return renameCategory(state);
        case 'SELECT_CATEGORY':
            return selectCategory(state, payload);
        case 'OPEN_CATEGORY':
        case 'CLOSE_CATEGORY':
            return toggleCategory(state, payload);
        case 'CATEGORY_TITLE_EDIT_ENABLE':
            return enableEdit(state, payload);
        case 'CATEGORY_TITLE_EDIT_DISABLE':
            return disableEdit(state);
        case 'CATEGORY_TITLE_TMP_CHANGE':
            return changeTmpTitle(state, payload);
        case 'MOVE_PROJECT_TO_CATEGORY':
            return moveProjectToCategory(state, payload);
        case 'COMPLETE_TASK':
            return changeTaskActivity(state, payload, false);
        case 'UNCOMPLETE_TASK':
            return changeTaskActivity(state, payload, true);
        case 'SELECT_TASK':
            return selectTask(state, payload);
        case 'SET_PROGRESS':
            return setProgress(state, payload);
        case 'OPEN_SIDEBAR':
            return openSidebar(state);
        case 'CLOSE_SIDEBAR':
            return closeSidebar(state);
        case 'ADD_TASK':
            return addTask(state, payload);
        default:
            console.log('%cDefault state returned!', 'color: yellow;');
            return state;
    }
};

function renameCategory(state) {
    const id = state.get('editCategoryId');
    return state.updateIn(['categories', id, 'name'], name => state.get('tmpTitle'));
}
function toggleCategory(state, id) {
    return state.updateIn(['categories', id, 'opened'], opened => !opened);
}
function enableEdit(state, { id, title }) {
    return state
            .set('editCategoryId', id)
            .set('tmpTitle', title);
}
function disableEdit(state) {
    return state
            .set('editCategoryId', defaultState.get('editCategoryId'))
            .set('tmpTitle', defaultState.get('tmpTitle'));
}
function changeTmpTitle(state, newTmpTitle) {
    return state.set('tmpTitle', newTmpTitle);
}
function addCategory(state, { parentId, name }) {
    name = name || prompt('Enter sub-category name', 'New sub category');
    const id = uniqueId('category_');
    return state.updateIn(['categories'], categories => categories.set(id, Immutable.Map(new Category(id, name, parentId))))
}
function deleteCategoryRecursive(categories, id) {
    if (!categories || !(id in categories)) {
        return categories;
    }
    delete categories[id];
    forEach(categories, ({ parentId }) => {
        if (parentId === id) {
            categories = deleteCategoryRecursive(categories, parentId);
        }
    });
    return categories;
}
function removeCategory(state, id) {
    if (!confirm('Are you sure?')) return state;
    return state.set('categories', Immutable.fromJS(deleteCategoryRecursive(state.get('categories').toJS(), id)));
}
function selectCategory(state, id) {
    return state.set('selectedCategoryId', id);
}
function moveProjectToCategory(state, newCategoryId) {
    const categoryName = state.getIn(['categories', newCategoryId, 'name']);
    if (!confirm(`Are you sure you want to move this task into category "${categoryName}"?`)) return state;
    const projectId = state.get('selectedProjectId');
    return state
        .setIn(['tasks', projectId, 'categoryId'], newCategoryId)
        .set('selectedCategoryId', newCategoryId);
}
function selectTask(state, id = null) {
    return state.set('selectedProjectId', id);
}
function changeTaskActivity(state, id, value = true) {
    return state.setIn(['tasks', id, 'isActive'], value);
}
/*
    function changeTaskActivity(state, id, value = true) {
        return state.setIn(['tasks', id, 'isActive'], value);
    }
*/


function setProgress(state, value) {
    return state.set('progress', value);
}
function openSidebar(state) {
    return state.set('isSidebarOpen', true);
}
function closeSidebar(state) {
    return state.set('isSidebarOpen', false);
}

function addTask(state, newName) {
    const id = uniqueId('task_');
    const selectedCategoryId = state.get('selectedCategoryId');
    return state.updateIn(['tasks'], tasks => tasks.set(id, Immutable.Map(new Task(id, newName, selectedCategoryId))))
}