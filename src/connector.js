import { connect } from 'react-redux';
import App from './App';
import * as actions from './actions';

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({ ...actions });
export default connect(mapStateToProps, mapDispatchToProps)(App);