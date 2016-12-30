import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ sidebar, header }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: sidebar.get('categories').toJS()
    })
};

const mapActionsToProps = {
    addCategory: actions.addCategory
};


export default connect(mapStateToProps, mapActionsToProps);