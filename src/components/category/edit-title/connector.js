import * as actions from '../../../actions';
import { connect } from 'react-redux';


const mapActionsToProps = {
    disableEdit: actions.disableEdit,
    renameCategory: actions.renameCategory,
    changeTmpTitle: actions.changeTmpTitle
};

export default (additionalProps = {}) => {
    const mapStateToProps = ({ category }) => {
        return ({
            editCategoryId: category.get('editCategoryId'),
            tmpTitle: category.get('tmpTitle'),
            ...additionalProps
        })
    };
    return connect(mapStateToProps, mapActionsToProps);
}