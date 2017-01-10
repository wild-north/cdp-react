import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    addCategory: actions.addCategory,
    removeCategory: actions.removeCategory,
    openCategory: actions.openCategory,
    closeCategory: actions.closeCategory,
    selectCategory: actions.selectCategory,
    enableEdit: actions.enableEdit,
    moveProjectToCategory: actions.moveProjectToCategory,
    selectTask: actions.selectTask
};

export default (additionalProps = {}) => {
    const mapStateToProps = state => ({
            selectedProjectId: state.get('selectedProjectId'),
            selectedCategoryId: state.get('selectedCategoryId'),
            ...additionalProps
        });
    return connect(mapStateToProps, mapActionsToProps);
}

