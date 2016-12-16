import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = state => state;

export const mainConnector = connect(mapStateToProps, actions );