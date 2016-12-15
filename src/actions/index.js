/**
 * Categories
 */
export const addCategory = (name, parentId) => ({
    type: 'ADD_CATEGORY',
    payload: { name, parentId }
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
export const renameCategory = (id, name) => ({
    type: 'CLOSE_CATEGORY',
    payload: { id, name }
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