// import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ main }) => {
    const selectedProjectId = main.get('selectedProjectId');
    const selectedCategoryId = main.get('selectedCategoryId');
    return ({
        isSidebarOpen: main.get('isSidebarOpen'),
        categories: main.get('categories').toJS(),
        selectedCategoryId: selectedCategoryId,
        task: selectedProjectId ? main.getIn(['tasks', selectedProjectId]).toJS() : null,
        activeCategory: selectedCategoryId ? main.getIn(['categories', selectedCategoryId]).toJS() : null
    })
};


export default connect(mapStateToProps, null);