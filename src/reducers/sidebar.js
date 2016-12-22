import Immutable from 'immutable';
import { Category } from '../helpers/models';
import { addCategory, removeCategory, renameCategory, selectCategory, toggleCategory } from '../helpers/categories';


const defaultState = Immutable.Map({
    categories: Immutable.Map({
        0: Immutable.Map((new Category(0,     'Frontend',     null,   [2,3,4,5]  ))),
        1: Immutable.Map((new Category(1,     'Markup',       null,   [11,12]     ))),
        2: Immutable.Map((new Category(2,     'ES6',          0,      []          ))),
        3: Immutable.Map((new Category(3,     'React',        0,      [6,7,8]     ))),
        4: Immutable.Map((new Category(4,     'Redux',        0,      []          ))),
        5: Immutable.Map((new Category(5,     'Angular',      0,      []          ))),
        6: Immutable.Map((new Category(6,     'Components',   3,      [9,10]      ))),
        7: Immutable.Map((new Category(7,     'Life cycle',   3,      []          ))),
        8: Immutable.Map((new Category(8,     'Routing',      3,      []          ))),
        9: Immutable.Map((new Category(9,     'Stateful',     6,      []          ))),
        10: Immutable.Map((new Category(10,    'Stateless',    6,      []          ))),
        11: Immutable.Map((new Category(11,    'HTML5',        1,      []          ))),
        12: Immutable.Map((new Category(12,    'CSS3',         1,      [13]        ))),
        13: Immutable.Map((new Category(13,    'Flexbox',     12,      []          )))
    }),
    selectedCategoryId: 0
});

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'ADD_CATEGORY':
            return addCategory(state, payload);
        case 'REMOVE_CATEGORY':
            return removeCategory(state, payload);
        case 'RENAME_CATEGORY':
            return renameCategory(state, payload);
        case 'SELECT_CATEGORY':
            return selectCategory(state, payload);
        case 'OPEN_CATEGORY':
        case 'CLOSE_CATEGORY':
            return toggleCategory(state, payload);
        default:
            return state;
    }
};