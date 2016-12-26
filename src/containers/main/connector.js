import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ sidebar, header, category }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: sidebar.get('categories').toJS(),
        selectedCategoryId: sidebar.get('selectedCategoryId'),
        isProjectEditing: sidebar.get('isProjectEditing'),
        editCategoryId: category.get('editCategoryId'),
        tmpTitle: category.get('tmpTitle'),
    })
};

const mappedActionsToProps = {
    selectCategory: actions.selectCategory,
    openCategory: actions.openCategory,
    closeCategory: actions.closeCategory,
    removeCategory: actions.removeCategory,
    renameCategory: actions.renameCategory,
    addCategory: actions.addCategory,
    enableEdit: actions.enableEdit,
    disableEdit: actions.disableEdit,
    saveCategoryTitle: actions.saveCategoryTitle,
    changeTmpTitle: actions.changeTmpTitle
};


export default connect(mapStateToProps, mappedActionsToProps);