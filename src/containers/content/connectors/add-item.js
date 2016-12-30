import * as actions from '../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (/*{ sidebar, header }*/) => ({
    // isSidebarOpen: header.get('isSidebarOpen'),
    // categories: sidebar.get('categories').toJS()
});

const mapActionsToProps = {
    add: actions.addTask
};

export default connect(mapStateToProps, mapActionsToProps);