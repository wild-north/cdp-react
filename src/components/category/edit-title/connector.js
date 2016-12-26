import * as actions from '../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ category }) => {
    return ({
        editCategoryId: category.get('editCategoryId'),
        tmpTitle: category.get('tmpTitle')
    })
};

const mappedActionsToProps = {
    disableEdit: actions.disableEdit,
    renameCategory: actions.renameCategory,
    changeTmpTitle: actions.changeTmpTitle
};


export default connect(mapStateToProps, mappedActionsToProps);