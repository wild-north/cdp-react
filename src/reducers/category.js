import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    editCategoryId: null,
    tmpTitle: ''
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'CATEGORY_TITLE_EDIT_ENABLE':
            const { id, title } = payload;
            return state.set('editCategoryId', id).set('tmpTitle', title);
        case 'CATEGORY_TITLE_EDIT_DISABLE':
            return state.set('editCategoryId', null);
        case 'CATEGORY_TITLE_TMP_CHANGE':
            return state.set('tmpTitle', payload.tmpTitle);
        default:
            return state;
    }
};