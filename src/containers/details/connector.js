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
    const selectedProjectId = main.get('selectedProjectId');
    return ({
        selectedCategoryId: main.get('selectedCategoryId'),
        task: selectedProjectId ? main.getIn(['tasks', selectedProjectId]).toJS() : null
    })
}, {
    completeTask: actions.completeTask,
    uncompleteTask: actions.uncompleteTask
});