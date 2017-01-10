import * as actions from '../../actions';
import { connect } from 'react-redux';

export const detailsConnector = connect(state => {
    const selectedProjectId = state.get('selectedProjectId');
    const selectedCategoryId = state.get('selectedCategoryId');
    return ({
        isSidebarOpen: state.get('isSidebarOpen'),
        categories: state.get('categories').toJS(),
        taskName: selectedProjectId ? state.getIn(['tasks', selectedProjectId, 'name']) : null,
        activeCategoryName: selectedCategoryId ? state.getIn(['categories', selectedCategoryId, 'name']) : null
    })
}, null);

export const projectEditConnector = connect(state => {
    return ({
        task: state.get('editProject').toJS()
    })
}, {
    setInactive: actions.completeTaskInEditMode,
    setActive: actions.incompleteTaskInEditMode,    
    changeDescription: actions.changeTaskDescriptionInEditMode,
    changeName: actions.changeTaskNameInEditMode,
    saveTask: actions.editTask,
    cancelEdit: actions.cancelEditTask,
});