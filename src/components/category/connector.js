import {connect} from 'react-redux';

const mapStateToProps = ({ sidebar }) => ({
    editCategoryId: sidebar.get('editCategoryId')
});

export default connect(mapStateToProps);

