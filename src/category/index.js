import React, { Component, PropTypes } from 'react';
import './styles.css';
import _ from 'lodash';


const addCategory = ({index}) => {
    alert('You trying to add a new sub-category to category with ID = ' + index);
};
const deleteCategory = ({index}) => {
    alert('You trying to delete category with ID = ' + index);
};

export default class Category extends Component {

    render() {
        const { children, title, index, parentIndex } = this.props;

        const fullIndex = (_.isNumber(parentIndex) ? parentIndex + '.' : '') + index;


        return (
            <li className="category">
                <div className="input-holder">
                    <button className="fa fa-angle-double-right">&nbsp;</button>
                    <span className="title">{fullIndex} {title}</span>
                    <button className="fa fa-pencil-square-o smaller">&nbsp;</button>
                </div>
                <div className="actions-holder">
                    <div className="actions">
                        <button className="fa fa-plus-square-o" onClick={addCategory}>&nbsp;</button>
                        <button className="fa fa-trash-o" onClick={deleteCategory}>&nbsp;</button>
                    </div>
                </div>
                {children}
            </li>
        );
    }
};

Category.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    parentIndex: PropTypes.number
};