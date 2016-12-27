import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    addCategory: actions.addCategory,
    removeCategory: actions.removeCategory,
    openCategory: actions.openCategory,
    closeCategory: actions.closeCategory,
    selectCategory: actions.selectCategory,
    enableEdit: actions.enableEdit
};

export default (additionalProps = {}) => {
    const mapStateToProps = ({ sidebar, content }) => {
        return ({
            editProjectId: content.get('editProjectId'),
            selectedCategoryId: sidebar.get('selectedCategoryId'),
            ...additionalProps
        })
    };
    return connect(mapStateToProps, mapActionsToProps);
}

