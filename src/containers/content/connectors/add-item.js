import * as actions from '../../../actions';
import { connect } from 'react-redux';

export default connect(null, {
    add: actions.addTask
});