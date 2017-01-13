import * as helpers from '../helpers/reducer';
import * as constants from '../constants';
import defaultState from './default-state';

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        /**
         * Categories
         */
        case constants.ADD_CATEGORY:
            return helpers.addCategory(state, payload);
        case constants.REMOVE_CATEGORY:
            return helpers.removeCategory(state, payload);
        case constants.RENAME_CATEGORY:
            return helpers.renameCategory(state);
        case constants.SELECT_CATEGORY:
            return helpers.selectCategory(state, payload);
        case constants.OPEN_CATEGORY:
        case constants.CLOSE_CATEGORY:
            return helpers.toggleCategory(state, payload);
        case constants.CATEGORY_TITLE_EDIT_ENABLE:
            return helpers.enableEdit(state, payload);
        case constants.CATEGORY_TITLE_EDIT_DISABLE:
            return helpers.disableEdit(state);
        case constants.CATEGORY_TITLE_TMP_CHANGE:
            return helpers.changeTmpTitle(state, payload);
        /**
         * Tasks (projects)
         */
        case constants.MOVE_PROJECT_TO_CATEGORY:
            return helpers.moveProjectToCategory(state, payload);
        case constants.COMPLETE_TASK:
            return helpers.changeTaskActivity(state, payload, true);
        case constants.INCOMPLETE_TASK:
            return helpers.changeTaskActivity(state, payload, false);
        case constants.SELECT_TASK:
            return helpers.selectTask(state, payload);
        case constants.EDIT_TASK:
            return helpers.editTask(state);
        case constants.CANCEL_EDIT_TASK:
            return helpers.cancelEditTask(state);

        case constants.COMPLETE_TASK__EDIT_MODE:
            return helpers.toggleTaskActivityInEditMode(state, false);
        case constants.INCOMPLETE_TASK__EDIT_MODE:
            return helpers.toggleTaskActivityInEditMode(state, true);
        case constants.CHANGE_TASK_DESCRIPTION__EDIT_MODE:
            return helpers.changeTaskDescriptionInEditMode(state, payload);
        case constants.CHANGE_TASK_NAME__EDIT_MODE:
            return helpers.changeTaskNameInEditMode(state, payload);
        /**
         * Common
         */
        case constants.SET_PROGRESS:
            return helpers.setProgress(state, payload);
        case constants.OPEN_SIDEBAR:
            return helpers.openSidebar(state);
        case constants.CLOSE_SIDEBAR:
            return helpers.closeSidebar(state);
        case constants.ADD_TASK:
            return helpers.addTask(state, payload);
        default:
            return state;
    }
};


