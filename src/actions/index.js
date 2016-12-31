/**
 * Categories
 */
export const addCategory = (parentId, name) => ({
    type: 'ADD_CATEGORY',
    payload: { parentId, name }
});
export const removeCategory = id => ({
    type: 'REMOVE_CATEGORY',
    payload: id
});
export const openCategory = id => ({
    type: 'OPEN_CATEGORY',
    payload: id
});
export const closeCategory = id => ({
    type: 'CLOSE_CATEGORY',
    payload: id
});
export const renameCategory = () => ({
    type: 'RENAME_CATEGORY'
});
export const selectCategory = id => ({
    type: 'SELECT_CATEGORY',
    payload: id
});
export const enableEdit = (id, title) => ({
    type: 'CATEGORY_TITLE_EDIT_ENABLE',
    payload: { id, title }
});
export const disableEdit = id => ({
    type: 'CATEGORY_TITLE_EDIT_DISABLE',
    payload: id
});
export const changeTmpTitle = tmpTitle => ({
    type: 'CATEGORY_TITLE_TMP_CHANGE',
    payload: tmpTitle
});
export const moveProjectToCategory = categoryId => ({
    type: 'MOVE_PROJECT_TO_CATEGORY',
    payload: categoryId
});

/**
 * Tasks
 */
export const addTask = (id, name) => ({
    type: 'ADD_TASK',
    payload: name
});
export const removeTask = (name, catId) => ({
    type: 'REMOVE_TASK',
    payload: { name, catId }
});
export const completeTask = id => ({
    type: 'COMPLETE_TASK',
    payload: id
});
export const uncompleteTask = id => ({
    type: 'UNCOMPLETE_TASK',
    payload: id
});
export const editTask = () => ({
    type: 'EDIT_TASK'
});
export const cancelEditTask = () => ({
    type: 'CANCEL_EDIT_TASK'
});
export const selectTask = id => ({
    type: 'SELECT_TASK',
    payload: id
});

/**
 * Common
 */
export const setProgress = value => ({
    type: 'SET_PROGRESS',
    payload: value
});
export const openSidebar = () => ({
    type: 'OPEN_SIDEBAR'
});
export const closeSidebar = () => ({
    type: 'CLOSE_SIDEBAR'
});

/**
 * Edit project
 */
export const completeTaskInEditMode = () => ({
    type: 'COMPLETE_TASK__EDIT_MODE'
});
export const incompleteTaskInEditMode = () => ({
    type: 'INCOMPLETE_TASK__EDIT_MODE'
});
export const changeTaskDescriptionInEditMode = description => ({
    type: 'CHANGE_TASK_DESCRIPTION__EDIT_MODE',
    payload: description
});
export const changeTaskNameInEditMode = name => ({
    type: 'CHANGE_TASK_NAME__EDIT_MODE',
    payload: name
});