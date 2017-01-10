import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    editCategoryId: state.get('editCategoryId')
});

export default connect(mapStateToProps);