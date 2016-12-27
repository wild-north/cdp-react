import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ sidebar, header }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: sidebar.get('categories').toJS(),
        selectedCategoryId: sidebar.get('selectedCategoryId'),
        isProjectEditing: sidebar.get('isProjectEditing'),
        editCategoryId: sidebar.get('editCategoryId'),
        tmpTitle: sidebar.get('tmpTitle'),
    })
};

const mappedActionsToProps = {
    selectCategory: actions.selectCategory,
    openCategory: actions.openCategory,
    closeCategory: actions.closeCategory,
    removeCategory: actions.removeCategory,
    addCategory: actions.addCategory,
    enableEdit: actions.enableEdit,
    disableEdit: actions.disableEdit,
    changeTmpTitle: actions.changeTmpTitle
};


export default connect(mapStateToProps, mappedActionsToProps);