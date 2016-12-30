import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ header, main }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: main.get('categories').toJS()
    })
};

const mapActionsToProps = {
    addCategory: actions.addCategory
};


export default connect(mapStateToProps, mapActionsToProps);