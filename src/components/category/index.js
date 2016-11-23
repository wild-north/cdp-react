import React, { Component, PropTypes } from 'react';
import './styles.css';
import _ from 'lodash';
import classnames from 'classnames';


const addCategory = ({index}) => {
    alert('You trying to add a new sub-category to category with ID = ' + index);
};
const deleteCategory = ({index}) => {
    alert('You trying to delete category with ID = ' + index);
};
const editCategory = ({index}) => {
    alert('You trying to delete category with ID = ' + index);
};


const SEPARATOR = '.';

const getFullIndex = (parentIndex, index) => (_.isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            showKids: false,
            editMode: false
        };
        this.toggleKids = this.toggleKids.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleKids() {
        this.setState({
            showKids: !this.state.showKids
        })
    }
    toggleEdit() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        const { children, title, index, parentIndex } = this.props;
        const { showKids, editMode } = this.state;

        const fullIndex = getFullIndex(parentIndex, index);


        return (
            <li className={classnames("category", {'no-children': !children})}>
                <div className="input-holder">
                    {
                        children ?
                            <button
                                className={classnames("fa fa-angle-double-right opener", {'active': !showKids})}
                                onClick={this.toggleKids} />
                            : null
                    }
                    <span
                        className={classnames("title", {'hidden': editMode})}
                    >{fullIndex} {title}</span>
                    <input type="text"
                           defaultValue={title}
                           className={classnames("edit", {'hidden': !editMode})}
                    />
                </div>
                <div className="actions-holder">
                    <div className="actions">
                        <button className={classnames("fa fa-pencil-square-o", {'hidden': editMode})} onClick={this.toggleEdit}>&nbsp;</button>
                        <button className={classnames("fa fa-check", {'hidden': !editMode})} onClick={this.toggleEdit}>&nbsp;</button>
                        <button className="fa fa-plus-square-o" onClick={addCategory}>&nbsp;</button>
                        <button className="fa fa-trash-o" onClick={deleteCategory}>&nbsp;</button>
                    </div>
                </div>
                {showKids && children ? children : null}
            </li>
        );
    }
};

Category.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    parentIndex: PropTypes.number
};