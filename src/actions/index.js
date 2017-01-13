import { createAction } from './../helpers';

import * as c from '../constants';

export const addCategory = createAction(c.ADD_CATEGORY);
export const removeCategory = createAction(c.REMOVE_CATEGORY);
export const openCategory = createAction(c.OPEN_CATEGORY);
export const closeCategory = createAction(c.CLOSE_CATEGORY);
export const renameCategory = createAction(c.RENAME_CATEGORY);
export const selectCategory = createAction(c.SELECT_CATEGORY);
export const enableEdit = createAction(c.CATEGORY_TITLE_EDIT_ENABLE);
export const disableEdit = createAction(c.CATEGORY_TITLE_EDIT_DISABLE);
export const changeTmpTitle = createAction(c.CATEGORY_TITLE_TMP_CHANGE);
export const moveProjectToCategory = createAction(c.MOVE_PROJECT_TO_CATEGORY);
export const addTask = createAction(c.ADD_TASK);
export const removeTask = createAction(c.REMOVE_TASK);
export const completeTask = createAction(c.COMPLETE_TASK);
export const incompleteTask = createAction(c.INCOMPLETE_TASK);
export const editTask = createAction(c.EDIT_TASK);
export const cancelEditTask = createAction(c.CANCEL_EDIT_TASK);
export const selectTask = createAction(c.SELECT_TASK);
export const setProgress = createAction(c.SET_PROGRESS);
export const openSidebar = createAction(c.OPEN_SIDEBAR);
export const closeSidebar = createAction(c.CLOSE_SIDEBAR);
export const completeTaskInEditMode = createAction(c.COMPLETE_TASK__EDIT_MODE);
export const incompleteTaskInEditMode = createAction(c.INCOMPLETE_TASK__EDIT_MODE);
export const changeTaskDescriptionInEditMode = createAction(c.CHANGE_TASK_DESCRIPTION__EDIT_MODE);
export const changeTaskNameInEditMode = createAction(c.CHANGE_TASK_NAME__EDIT_MODE);