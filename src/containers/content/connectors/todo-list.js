import * as actions from '../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ main }) => {
    return ({
        tasks: main.get('tasks').toJS(),
        selectedCategoryId: main.get('selectedCategoryId'),
        selectedProjectId: main.get('selectedProjectId')
    })
};

export default connect(mapStateToProps, {
    completeTask: actions.completeTask,
    uncompleteTask: actions.uncompleteTask,
    selectTask: actions.selectTask
});