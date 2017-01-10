import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        isSidebarOpen: state.get('isSidebarOpen'),
        categories: state.get('categories').toJS()
    })
};

const mapActionsToProps = {
    addCategory: actions.addCategory
};


export default connect(mapStateToProps, mapActionsToProps);