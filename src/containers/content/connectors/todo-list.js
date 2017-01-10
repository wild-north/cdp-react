import * as actions from '../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        tasks: state.get('tasks').toJS(),
        selectedCategoryId: state.get('selectedCategoryId'),
        selectedProjectId: state.get('selectedProjectId')
    })
};

export default connect(mapStateToProps, {
    completeTask: actions.completeTask,
    uncompleteTask: actions.uncompleteTask,
    selectTask: actions.selectTask
});