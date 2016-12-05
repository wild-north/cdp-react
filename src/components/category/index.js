import React, { Component, PropTypes } from 'react';
import './styles.css';
import { isNumber } from 'lodash';
import classnames from 'classnames';
import SEPARATOR from '../category-list';

const addCategory = ({index}) => {
    alert('You trying to add a new sub-category to category with ID = ' + index);
};
const deleteCategory = ({index}) => {
    alert('You trying to delete category with ID = ' + index);
};



const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        const { children, title, index, parentIndex, opened, toggleOpened, parentList } = this.props;
        const { editMode } = this.state;

        const fullIndex = getFullIndex(parentIndex, index);


        return (
            <li className={classnames("category", {'no-children': !children})}>
                <div className="input-holder">
                    {
                        children ?
                            <button className={classnames("fa fa-angle-double-right opener", {'active': !opened})}
                                    onClick={toggleOpened(fullIndex, parentList)} />
                            : null
                    }

                    {
                        editMode ?
                            <input type="text"  defaultValue={title}  className="edit" />
                         :  <span className="title">{fullIndex} {title}</span>
                    }

                </div>
                <div className="actions-holder">
                    <div className="actions">
                        {
                            editMode ?
                                <span>
                                    <button className="fa fa-check green" onClick={this.toggleEdit}>&nbsp;</button>
                                    <button className="fa fa-times red" onClick={this.toggleEdit}>&nbsp;</button>
                                </span>

                            :   <span>
                                    <button className="fa fa-pencil-square-o" onClick={this.toggleEdit}>&nbsp;</button>
                                    <button className="fa fa-plus-square-o" onClick={addCategory}>&nbsp;</button>
                                    <button className="fa fa-trash-o" onClick={deleteCategory}>&nbsp;</button>
                                </span>
                        }

                    </div>
                </div>
                {
                    opened && children ?
                        children
                        : null
                }
            </li>
        );
    }
};

Category.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    parentIndex: PropTypes.number
};