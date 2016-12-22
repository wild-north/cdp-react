import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ sidebar, header }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: sidebar.get('categories').toJS(),
        selectedCategoryId: sidebar.get('selectedCategoryId'),
        isProjectEditing: sidebar.get('isProjectEditing'),
    })
};

export default connect(mapStateToProps, {
    selectCategory: actions.selectCategory,
    openCategory: actions.openCategory,
    closeCategory: actions.closeCategory,
    removeCategory: actions.removeCategory,
    renameCategory: actions.renameCategory,
    addCategory: actions.addCategory
});