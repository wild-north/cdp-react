import reducer from '../src/reducers';
import Immutable from 'immutable';
import { Category, Task } from '../src/models';

const mockedState = Immutable.fromJS({
    categories: {
        '0': Immutable.Map(new Category('0', 'Frontend', null)),
        '1': Immutable.Map(new Category('1', 'Markup', '0'))
    },
    tasks: {
        '0': Immutable.Map(new Task('0', 'Task 0', '0', 'lorem ipsum')),
        '1': Immutable.Map(new Task('1', 'Task 1', '1', 'dolor sit amet'))
    },
    selectedProjectId: "0",
    selectedCategoryId: "0",
    editProject: Immutable.Map(new Task(null, '', null, '')),
    editCategoryId: null,
    tmpTitle: "",
    progress: 0,
    isSidebarOpen: true
});

describe('Reducer', () => {

    describe('Categories', () => {
        it('should add new category with id "category_1"', () => {
            expect(
                reducer(mockedState, {
                    type: "ADD_CATEGORY",
                    payload: {
                        parentId: "0",
                        name: "Test category"
                    }
                }).getIn(['categories', "category_1"]).toJS()
            ).toEqual(new Category("category_1", "Test category", "0"));
        });

        it('should remove category with id = "0"', () => {
            const tmpState = reducer(mockedState, {
                type: "REMOVE_CATEGORY",
                payload: "0"
            }).getIn(['categories', "0"]);
            expect(tmpState).toBeUndefined();
        });

        it('should rename category with id = "0" to "Test"', () => {
            let tmp = mockedState
                .set('tmpTitle', 'Test')
                .set('editCategoryId', '0');
            const state = reducer(tmp, {type: "RENAME_CATEGORY"});
            expect(state.getIn(['categories', "0", 'name'])).toBe('Test');
        });

        it('should select category with id = "1"', () => {
            const tmpState = reducer(mockedState, {
                type: "SELECT_CATEGORY",
                payload: "1"
            });
            expect(tmpState.get('selectedCategoryId')).toBe("1");
        });

        it('should toggle category opened state from true to false', () => {
            const tmpState = reducer(mockedState, {
                type: "CLOSE_CATEGORY",
                payload: "0"
            });
            expect(tmpState.getIn(['categories', "0", 'opened'])).toBe(false);
        });

        it('should set `editCategoryId` to "0" and set `tmpTitle` to "Test"', () => {
            const tmpState = reducer(mockedState, {
                type: "CATEGORY_TITLE_EDIT_ENABLE",
                payload: {
                    id: "0",
                    title: "Test"
                }
            });
            const editCategoryId = tmpState.get('editCategoryId');
            const tmpTitle = tmpState.get('tmpTitle');

            expect({editCategoryId, tmpTitle}).toEqual({
                editCategoryId: "0",
                tmpTitle: "Test"
            });
        });

        it('should set `editCategoryId` to null and set `tmpTitle` to empty string', () => {
            const tmpState = reducer(mockedState, {type: "CATEGORY_TITLE_EDIT_DISABLE"});
            const editCategoryId = tmpState.get('editCategoryId');
            const tmpTitle = tmpState.get('tmpTitle');

            expect({editCategoryId, tmpTitle}).toEqual({
                editCategoryId: null,
                tmpTitle: ""
            });
        });

        it('should change `tmpTitle`', () => {
            const tmpState = reducer(mockedState, {type: "CATEGORY_TITLE_TMP_CHANGE", payload: "Test"});
            expect(tmpState.get('tmpTitle')).toBe("Test");
        });
    });

    describe('Tasks', () => {
        it('should select task with id = "0"', () => {
            const state = reducer(mockedState, {
                type: "SELECT_TASK",
                payload: "0"
            });
            const { selectedProjectId, editProject } = state.toJS();

            expect({selectedProjectId, editProject}).toEqual({
                selectedProjectId: "0",
                editProject: mockedState.getIn(["tasks", "0"]).toJS()
            });
        });

        it('should move task to category with id = "1"', () => {
            let state = reducer(mockedState, {
                type: "SELECT_TASK",
                payload: "0"
            });
            
            state = reducer(state, {
                type: "MOVE_PROJECT_TO_CATEGORY",
                payload: "1" 
            });

            expect(state.getIn(['tasks', '0', 'categoryId'])).toBe('1');
        });
    });
    
});