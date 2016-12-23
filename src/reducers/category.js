import Immutable from 'immutable';
import { enableEdit, disableEdit, saveCategoryTitle, changeTmpTitle } from '../helpers/reducers/category';

const defaultState = Immutable.fromJS({
    category: Immutable.fromJS({
        editCategoryId: null,
        tmpTitle: ''
    }),
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'CATEGORY_TITLE_EDIT_ENABLE':
            return enableEdit(state, payload); // payload = id
        case 'CATEGORY_TITLE_EDIT_DISABLE':
            return disableEdit(state, payload); // payload = id
        case 'CATEGORY_TITLE_TMP_CHANGE':
            return changeTmpTitle(state, payload); // payload = id

        case 'CATEGORY_TITLE_SAVE':
            return saveCategoryTitle(state, payload); // payload = { id, newTitle}
        default:
            return state;
    }
};