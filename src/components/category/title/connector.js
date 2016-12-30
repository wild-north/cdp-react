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
    const mapStateToProps = ({ main }) => {
        return ({
            selectedProjectId: main.get('selectedProjectId'),
            selectedCategoryId: main.get('selectedCategoryId'),
            ...additionalProps
        })
    };
    return connect(mapStateToProps, mapActionsToProps);
}

