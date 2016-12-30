import {connect} from 'react-redux';

const mapStateToProps = ({ main }) => ({
    editCategoryId: main.get('editCategoryId')
});

export default connect(mapStateToProps);