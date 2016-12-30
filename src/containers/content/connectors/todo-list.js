import * as actions from '../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ content, sidebar }) => {
    return ({
        tasks: content.get('tasks').toJS(),
        selectedCategoryId: sidebar.get('selectedCategoryId'),
        selectedProjectId: content.get('selectedProjectId')
    })
};

const mapActionsToProps = {
    completeTask: actions.completeTask,
    uncompleteTask: actions.uncompleteTask,
    selectTask: actions.selectTask
};


export default connect(mapStateToProps, mapActionsToProps);