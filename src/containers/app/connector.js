import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = state => {
    return state;
};
// const mapDispatchToProps = dispatch => ({ ...actions });

export const appConnector = connect(mapStateToProps, {
    openSidebar: actions.openSidebar,
    closeSidebar: actions.closeSidebar
});