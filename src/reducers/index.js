import Immutable from 'immutable';
import { Category, Task } from '../models';
import { forEach, uniqueId } from 'lodash';
import { parseUrlHash, getProgressValue } from '../helpers';
import * as c from '../constants';

const defaultCategories = Immutable.Map({
    '0': Immutable.Map((new Category(   '0',     'Frontend',     null       ))),
    '1': Immutable.Map((new Category(   '1',     'Markup',       null       ))),
    '2': Immutable.Map((new Category(   '2',     'ES6',          '0'        ))),
    '3': Immutable.Map((new Category(   '3',     'React',        '0'        ))),
    '4': Immutable.Map((new Category(   '4',     'Redux',        '0'        ))),
    '5': Immutable.Map((new Category(   '5',     'Angular',      '0'        ))),
    '6': Immutable.Map((new Category(   '6',    'Components',    '3'        ))),
    '7': Immutable.Map((new Category(   '7',     'Life cycle',   '3'        ))),
    '8': Immutable.Map((new Category(   '8',     'Routing',      '3'        ))),
    '9': Immutable.Map((new Category(   '9',     'Stateful',     '6'        ))),
    '10': Immutable.Map((new Category(  '10',     'Stateless',   '6'        ))),
    '11': Immutable.Map((new Category(  '11',     'HTML5',       '1'        ))),
    '12': Immutable.Map((new Category(  '12',     'CSS3',        '1'        ))),
    '13': Immutable.Map((new Category(  '13',     'Flexbox',    '12'        )))
});
const defaultTasks = Immutable.Map({
    '0': Immutable.Map((new Task(   '0',   'Task 0',     '0', 'lorem fucking ipsum'))),
    '1': Immutable.Map((new Task(   '1',   'Task 1',     '1' ))),
    '2': Immutable.Map((new Task(   '2',   'Task 2',     '2' ))),
    '3': Immutable.Map((new Task(   '3',   'Task 3',     '3' ))),
    '4': Immutable.Map((new Task(   '4',   'Task 4',     '4' ))),
    '5': Immutable.Map((new Task(   '5',   'Task 5',     '5' ))),
    '6': Immutable.Map((new Task(   '6',   'Task 6',     '6' ))),
    '7': Immutable.Map((new Task(   '7',   'Task 7',     '7' ))),
    '8': Immutable.Map((new Task(   '8',   'Task 8',     '8' ))),
    '9': Immutable.Map((new Task(   '9',   'Task 9',     '9' ))),
    '10': Immutable.Map((new Task(  '10',  'Task 10',   '10' ))),
    '11': Immutable.Map((new Task(  '11',  'Task 11',   '11' ))),
    '12': Immutable.Map((new Task(  '12',  'Task 12',   '12' ))),
    '13': Immutable.Map((new Task(  '13',  'Task 13',   '13' ))),
    '14': Immutable.Map((new Task(  '14',  'Task 14',    '0', 'ipsum fucking lorem' ))),
});
const projectIdFromURL =  parseUrlHash().project;
const categoryIdFromURL =  parseUrlHash().category;

export const defaultState = Immutable.Map({
    categories: Immutable.Map(defaultCategories),
    tasks: Immutable.Map(defaultTasks),
    selectedProjectId: (projectIdFromURL in defaultTasks.toJS()) ? projectIdFromURL : null,
    selectedCategoryId: (categoryIdFromURL in defaultCategories.toJS()) ? categoryIdFromURL : '0',
    editProject: getDefaultEditProject(),
    editCategoryId: null,
    tmpTitle: '',
    progress: getProgressValue(defaultTasks.toJS()),
    isSidebarOpen: true,
    /**
     * TODO: change editCategoryId AND tmpTitle to editCategory, as shown below
     *
     * editCategory: Immutable.Map((new Category(null, '', null)))
     * */
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        /**
         * Categories
         */
        case c.ADD_CATEGORY:
            return addCategory(state, payload);
        case c.REMOVE_CATEGORY:
            return removeCategory(state, payload);
        case c.RENAME_CATEGORY:
            return renameCategory(state);
        case c.SELECT_CATEGORY:
            return selectCategory(state, payload);
        case c.OPEN_CATEGORY:
        case c.CLOSE_CATEGORY:
            return toggleCategory(state, payload);
        case c.CATEGORY_TITLE_EDIT_ENABLE:
            return enableEdit(state, payload);
        case c.CATEGORY_TITLE_EDIT_DISABLE:
            return disableEdit(state);
        case c.CATEGORY_TITLE_TMP_CHANGE:
            return changeTmpTitle(state, payload);
        /**
         * Tasks (projects)
         */
        case c.MOVE_PROJECT_TO_CATEGORY:
            return moveProjectToCategory(state, payload);
        case c.COMPLETE_TASK:
            return changeTaskActivity(state, payload, true);
        case c.INCOMPLETE_TASK:
            return changeTaskActivity(state, payload, false);
        case c.SELECT_TASK:
            return selectTask(state, payload);
        case c.EDIT_TASK:
            return editTask(state);
        case c.CANCEL_EDIT_TASK:
            return cancelEditTask(state);

        case c.COMPLETE_TASK__EDIT_MODE:
            return toggleTaskActivityInEditMode(state, false);
        case c.INCOMPLETE_TASK__EDIT_MODE:
            return toggleTaskActivityInEditMode(state, true);
        case c.CHANGE_TASK_DESCRIPTION__EDIT_MODE:
            return changeTaskDescriptionInEditMode(state, payload);
        case c.CHANGE_TASK_NAME__EDIT_MODE:
            return changeTaskNameInEditMode(state, payload);
        /**
         * Common
         */
        case c.SET_PROGRESS:
            return setProgress(state, payload);
        case c.OPEN_SIDEBAR:
            return openSidebar(state);
        case c.CLOSE_SIDEBAR:
            return closeSidebar(state);
        case c.ADD_TASK:
            return addTask(state, payload);
        default:
            return state;
    }
};

function getDefaultEditProject() {
    return categoryIdFromURL in defaultCategories.toJS() && projectIdFromURL in defaultTasks.toJS()
        ? defaultTasks.get(projectIdFromURL)
        : Immutable.Map((new Task(null, '', null, '')));
}


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
    const selectedProjectId = state.get('selectedProjectId');
    return state
        .setIn(['tasks', selectedProjectId, 'categoryId'], newCategoryId)
        .set('selectedCategoryId', newCategoryId);
}
function selectTask(state, id = null) {
    const selectedProject = state.getIn(['tasks', id]);
    return state
        .set('selectedProjectId', id)
        .set('editProject', selectedProject);
}
function changeTaskActivity(state, id, value = false) {
    const newState = state.setIn(['tasks', id, 'done'], value);
    const computedProgress = getProgressValue(newState.get('tasks').toJS());
    return newState.set('progress', computedProgress);
}
function setProgress(state, value) {
    return state.set('progress', value);
}
function openSidebar(state) {
    return state.set('isSidebarOpen', true);
}
function closeSidebar(state) {
    return state.set('isSidebarOpen', false);
}

function addTask(state, { name }) {
    const id = uniqueId('task_');
    const selectedCategoryId = state.get('selectedCategoryId');
    return state.updateIn(['tasks'], tasks => tasks.set(id, Immutable.Map(new Task(id, name, selectedCategoryId))))
}
function editTask(state) {
    if (!confirm('Save changes?')) return state;
    const editProject = state.get('editProject');
    const id = editProject.get('id');
    const currentTask = state.getIn(['tasks', id]);
    window.location.hash = `/category/${state.get('selectedCategoryId')}`;
    if (id && editProject === currentTask) {
        return state;
    }
    return state.updateIn(['tasks'], tasks => tasks.set(id, editProject));
}

function cancelEditTask(state) {
    if (!confirm('Cancel changes?')) return state;
    window.location.hash = `/category/${state.get('selectedCategoryId')}`;
    return state
        .set('editProject', Immutable.Map((new Task(null, '', null, ''))))
        .set('selectedProjectId', null);
}

function toggleTaskActivityInEditMode(state, value = false) {
    return state.setIn(['editProject', 'done'], value);
}
function changeTaskDescriptionInEditMode(state, description) {
    return state.setIn(['editProject', 'description'], description);
}
function changeTaskNameInEditMode(state, name){
    return state.setIn(['editProject', 'name'], name);
}