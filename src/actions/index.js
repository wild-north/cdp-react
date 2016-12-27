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

/**
 * Tasks
 */
export const addTask = (name, catId) => ({
    type: 'ADD_TASK',
    payload: { name, catId }
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
export const editTask = (id, editedTask) => ({
    type: 'EDIT_TASK',
    payload: { id, editedTask }
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