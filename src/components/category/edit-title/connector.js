import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    disableEdit: actions.disableEdit,
    renameCategory: actions.renameCategory,
    changeTmpTitle: actions.changeTmpTitle
};

const mapStateToProps = (state) => {
    return ({
        editCategoryId: state.get('editCategoryId'),
        tmpTitle: state.get('tmpTitle')
    })
};
export default connect(mapStateToProps, mapActionsToProps);