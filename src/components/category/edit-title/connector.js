import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    disableEdit: actions.disableEdit,
    renameCategory: actions.renameCategory,
    changeTmpTitle: actions.changeTmpTitle
};

// export default (additionalProps = {}) => {

// }

const mapStateToProps = ({ sidebar }) => {
    return ({
        editCategoryId: sidebar.get('editCategoryId'),
        tmpTitle: sidebar.get('tmpTitle')
    })
};
export default connect(mapStateToProps, mapActionsToProps);