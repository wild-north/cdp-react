import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    disableEdit: actions.disableEdit,
    renameCategory: actions.renameCategory,
    changeTmpTitle: actions.changeTmpTitle
};

const mapStateToProps = ({ main }) => {
    return ({
        editCategoryId: main.get('editCategoryId'),
        tmpTitle: main.get('tmpTitle')
    })
};
export default connect(mapStateToProps, mapActionsToProps);