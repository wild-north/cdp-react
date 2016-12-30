import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = ({ main }) => ({
    isSidebarOpen: main.get('isSidebarOpen'),
    progress: main.get('progress')
});

/**
 * common way to pass actions into connected component:
 *
 * const mapDispatchToProps = dispatch => ({ ...actions });
 */

export default connect(mapStateToProps, {
    openSidebar: actions.openSidebar,
    closeSidebar: actions.closeSidebar
});