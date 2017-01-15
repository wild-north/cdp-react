import Immutable from 'immutable';
import { Category, Task } from '../models';
import { getProgressValue } from '../helpers';
import { forEach, uniqueId } from 'lodash';
import defaultState from '../reducers/default-state';

export const renameCategory = (state) => {
    const id = state.get('editCategoryId');
    return state.updateIn(['categories', id, 'name'], name => state.get('tmpTitle'));
};
export const toggleCategory = (state, id) => {
    return state.updateIn(['categories', id, 'opened'], opened => !opened);
};
export const enableEdit = (state, { id, title }) => {
    return state
        .set('editCategoryId', id)
        .set('tmpTitle', title);
};
export const disableEdit = (state) => {
    return state
        .set('editCategoryId', defaultState.get('editCategoryId'))
        .set('tmpTitle', defaultState.get('tmpTitle'));
};
export const changeTmpTitle = (state, newTmpTitle) => {
    return state.set('tmpTitle', newTmpTitle);
};
export const addCategory = (state, { parentId, name }) => {
    name = name || prompt('Enter sub-category name', 'New sub category');
    const id = uniqueId('category_');
    return state.updateIn(['categories'], categories => categories.set(id, Immutable.Map(new Category(id, name, parentId))))
};
export const deleteCategoryRecursive = (categories, deleteCategoryId) => {
    if (!categories || !(deleteCategoryId in categories)) {
        return categories;
    }
    delete categories[deleteCategoryId];
    forEach(categories, (category) => {
        if (!category) return;
        if (category.parentId === deleteCategoryId) {
            categories = deleteCategoryRecursive(categories, category.id);
        }
    });
    return categories;
};
export const removeCategory = (state, id) => {
    return state.set('categories', Immutable.fromJS(deleteCategoryRecursive(state.get('categories').toJS(), id)));
};
export const selectCategory = (state, id) => {
    return state.set('selectedCategoryId', id);
};
export const moveProjectToCategory = (state, newCategoryId) => {
    const selectedProjectId = state.get('selectedProjectId');
    return state
        .setIn(['tasks', selectedProjectId, 'categoryId'], newCategoryId)
        .set('selectedCategoryId', newCategoryId);
};
export const selectTask = (state, id = null) => {
    const selectedProject = state.getIn(['tasks', id]);
    return state
        .set('selectedProjectId', id)
        .set('editProject', selectedProject);
};
export const changeTaskActivity = (state, id, value = false) => {
    const newState = state.setIn(['tasks', id, 'done'], value);
    const computedProgress = getProgressValue(newState.get('tasks').toJS());
    return newState.set('progress', computedProgress);
};
export const setProgress = (state, value) => {
    return state.set('progress', value);
};
export const openSidebar = (state) => {
    return state.set('isSidebarOpen', true);
};
export const closeSidebar = (state) => {
    return state.set('isSidebarOpen', false);
};

export const addTask = (state, { name }) => {
    const id = uniqueId('task_');
    const selectedCategoryId = state.get('selectedCategoryId');
    return state.updateIn(['tasks'], tasks => tasks.set(id, Immutable.Map(new Task(id, name, selectedCategoryId))))
};
export const editTask = (state) => {
    const editProject = state.get('editProject');
    const id = editProject.get('id');
    const currentTask = state.getIn(['tasks', id]);
    window.location.hash = `/category/${state.get('selectedCategoryId')}`;
    if (id && editProject === currentTask) {
        return state;
    }
    return state.updateIn(['tasks'], tasks => tasks.set(id, editProject));
};

export const cancelEditTask = (state) => {
    window.location.hash = `/category/${state.get('selectedCategoryId')}`;
    return state
        .set('editProject', Immutable.Map((new Task(null, '', null, ''))))
        .set('selectedProjectId', null);
};

export const toggleTaskActivityInEditMode = (state, value = false) => {
    return state.setIn(['editProject', 'done'], value);
};
export const changeTaskDescriptionInEditMode = (state, description) => {
    return state.setIn(['editProject', 'description'], description);
};
export const changeTaskNameInEditMode = (state, name) => {
    return state.setIn(['editProject', 'name'], name);
};