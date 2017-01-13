import reducer from '../src/reducers';
import Immutable from 'immutable';
import { Category, Task } from '../src/models';

function sum(a, b) {
    return a + b;
}

const defaultState = Immutable.fromJS({
    categories: {
        '0': Immutable.Map(new Category('0', 'Frontend', null)),
        '1': Immutable.Map(new Category('1', 'Markup', '0'))
    },
    tasks: {
        '0': Immutable.Map(new Task('0', 'Task 0', '0', 'lorem ipsum')),
        '1': Immutable.Map(new Task('1', 'Task 1', '1', 'dolor sit amet'))
    },
    selectedProjectId: '0',
    selectedCategoryId: '0',
    editProject: Immutable.Map(new Task(null, '', null, '')),
    editCategoryId: null,
    tmpTitle: '',
    progress: 0,
    isSidebarOpen: true
});


describe('sum', () => {
   it('should sum two numbers', () => {
       expect(sum(1,2)).toBe(3);
   });
});