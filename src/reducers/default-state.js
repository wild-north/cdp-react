import Immutable from 'immutable';
import { Category, Task } from '../models';
import { parseUrlHash, getProgressValue } from '../helpers';


const defaultCategories = Immutable.Map({
    '0': Immutable.Map((new Category(   '0',     'Frontend',     null       ))),
    '1': Immutable.Map((new Category(   '1',     'Markup',       null       ))),
    '2': Immutable.Map((new Category(   '2',     'ES6',          '0'        ))),
    '3': Immutable.Map((new Category(   '3',     'React',        '0'        ))),
    '4': Immutable.Map((new Category(   '4',     'Redux',        '0'        ))),
    '5': Immutable.Map((new Category(   '5',     'Angular',      '0'        ))),
    '6': Immutable.Map((new Category(   '6',    'Components',    '3'        ))),
    '7': Immutable.Map((new Category(   '7',     'Life cycle',   '3'        ))),
    '8': Immutable.Map((new Category(   '8',     'Routing',      '3'        ))),
    '9': Immutable.Map((new Category(   '9',     'Stateful',     '6'        ))),
    '10': Immutable.Map((new Category(  '10',     'Stateless',   '6'        ))),
    '11': Immutable.Map((new Category(  '11',     'HTML5',       '1'        ))),
    '12': Immutable.Map((new Category(  '12',     'CSS3',        '1'        ))),
    '13': Immutable.Map((new Category(  '13',     'Flexbox',    '12'        )))
});
const defaultTasks = Immutable.Map({
    '0': Immutable.Map((new Task(   '0',   'Task 0',     '0', 'lorem fucking ipsum'))),
    '1': Immutable.Map((new Task(   '1',   'Task 1',     '1' ))),
    '2': Immutable.Map((new Task(   '2',   'Task 2',     '2' ))),
    '3': Immutable.Map((new Task(   '3',   'Task 3',     '3' ))),
    '4': Immutable.Map((new Task(   '4',   'Task 4',     '4' ))),
    '5': Immutable.Map((new Task(   '5',   'Task 5',     '5' ))),
    '6': Immutable.Map((new Task(   '6',   'Task 6',     '6' ))),
    '7': Immutable.Map((new Task(   '7',   'Task 7',     '7' ))),
    '8': Immutable.Map((new Task(   '8',   'Task 8',     '8' ))),
    '9': Immutable.Map((new Task(   '9',   'Task 9',     '9' ))),
    '10': Immutable.Map((new Task(  '10',  'Task 10',   '10' ))),
    '11': Immutable.Map((new Task(  '11',  'Task 11',   '11' ))),
    '12': Immutable.Map((new Task(  '12',  'Task 12',   '12' ))),
    '13': Immutable.Map((new Task(  '13',  'Task 13',   '13' ))),
    '14': Immutable.Map((new Task(  '14',  'Task 14',    '0', 'ipsum fucking lorem' ))),
});
const projectIdFromURL =  parseUrlHash().project;
const categoryIdFromURL =  parseUrlHash().category;


const defaultState = Immutable.Map({
    categories: Immutable.Map(defaultCategories),
    tasks: Immutable.Map(defaultTasks),
    selectedProjectId: (projectIdFromURL in defaultTasks.toJS()) ? projectIdFromURL : null,
    selectedCategoryId: (categoryIdFromURL in defaultCategories.toJS()) ? categoryIdFromURL : '0',
    editProject: getDefaultEditProject(),
    editCategoryId: null,
    tmpTitle: '',
    progress: getProgressValue(defaultTasks.toJS()),
    isSidebarOpen: true,
    /**
     * TODO: change editCategoryId AND tmpTitle to editCategory, as shown below
     *
     * editCategory: Immutable.Map((new Category(null, '', null)))
     * */
});

export default defaultState;

function getDefaultEditProject() {
    return categoryIdFromURL in defaultCategories.toJS() && projectIdFromURL in defaultTasks.toJS()
        ? defaultTasks.get(projectIdFromURL)
        : Immutable.Map((new Task(null, '', null, '')));
}