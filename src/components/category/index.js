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

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            showKids: false
        };
        this.toggleKids = this.toggleKids.bind(this);
    }
    toggleKids() {
        this.setState({
            showKids: !this.state.showKids
        })
    }

    render() {
        const { children, title, index, parentIndex } = this.props;
        const { showKids } = this.state;

        const fullIndex = (_.isNumber(parentIndex) ? parentIndex + '.' : '') + index;


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
                    <span className="title">{fullIndex} {title}</span>
                </div>
                <div className="actions-holder">
                    <div className="actions">
                        <button className="fa fa-pencil-square-o" onClick={editCategory}>&nbsp;</button>
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