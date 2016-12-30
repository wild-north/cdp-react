import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ main }) => {
    return ({
        isSidebarOpen: main.get('isSidebarOpen'),
        categories: main.get('categories').toJS()
    })
};

const mapActionsToProps = {
    addCategory: actions.addCategory
};


export default connect(mapStateToProps, mapActionsToProps);