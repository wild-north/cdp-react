import * as actions from '../../actions';
import { connect } from 'react-redux';

export const detailsConnector = connect(({ main }) => {
    const selectedProjectId = main.get('selectedProjectId');
    const selectedCategoryId = main.get('selectedCategoryId');
    return ({
        isSidebarOpen: main.get('isSidebarOpen'),
        categories: main.get('categories').toJS(),
        taskName: selectedProjectId ? main.getIn(['tasks', selectedProjectId, 'name']) : null,
        activeCategoryName: selectedCategoryId ? main.getIn(['categories', selectedCategoryId, 'name']) : null
    })
}, null);

export const projectEditConnector = connect(({ main }) => {
    return ({
        task: main.get('editProject').toJS()
    })
}, {
    setInactive: actions.completeTaskInEditMode,
    setActive: actions.incompleteTaskInEditMode,    
    changeDescription: actions.changeTaskDescriptionInEditMode,
    changeName: actions.changeTaskNameInEditMode,
    saveTask: actions.editTask,
    cancelEdit: actions.cancelEditTask,
});