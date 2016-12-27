import Immutable from 'immutable';
import { Category } from '../models';
import { forEach, uniqueId } from 'lodash';


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
    selectedCategoryId: '0',
    editCategoryId: null,
    tmpTitle: ''

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
        default:
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