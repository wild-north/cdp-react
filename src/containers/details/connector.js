import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ sidebar, header }) => {
    return ({
        isSidebarOpen: header.get('isSidebarOpen'),
        categories: sidebar.get('categories').toJS()
    })
};


export default connect(mapStateToProps, null);