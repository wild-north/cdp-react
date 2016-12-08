import React, { Component, PropTypes } from 'react';
import './styles.css';
import { isNumber } from 'lodash';
import classnames from 'classnames';
import SEPARATOR from '../category-list';


const getFullIndex = (parentIndex, index) => (isNumber(parentIndex) ? parentIndex + SEPARATOR : '') + index;


export default class Category extends Component {
    constructor() {
        super();
        this.defaultState = {
            editMode: false,
            tmpTitle: null
        };
        this.state = this.defaultState;

        this.openEdit = this.openEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.saveTitle = this.saveTitle.bind(this);
        this.editTitle = this.editTitle.bind(this);
    }
    openEdit() {
        this.setState({
            tmpTitle: this.props.title,
            editMode: true
        });
    }
    saveTitle(index, list) {
        return () => {
            this.props.rename(index, list, this.state.tmpTitle);
            this.setState(this.defaultState);
        }
    }
    cancelEdit() {
        this.setState(this.defaultState);
    }
    editTitle(e) {
        this.setState({
            tmpTitle: e.target.value
        });
    }

    render() {
        const { children, title, index, parentIndex, opened, toggleOpened, parentList, remove, rename } = this.props;
        const { editMode, tmpTitle } = this.state;

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
                            <input type="text" value={tmpTitle} className="edit" onChange={this.editTitle}/>
                         :  <span className="title">{fullIndex} {title}</span>
                    }

                </div>

                <div className="actions-holder">
                    <div className="actions">
                        {
                            editMode ?
                                <span>
                                    <button className="fa fa-check green" onClick={this.saveTitle(fullIndex, parentList)}>&nbsp;</button>
                                    <button className="fa fa-times red" onClick={this.cancelEdit}>&nbsp;</button>
                                </span>

                            :   <span>
                                    <button className="fa fa-pencil-square-o" onClick={this.openEdit}>&nbsp;</button>
                                    <button className="fa fa-plus-square-o">&nbsp;</button>
                                    <button className="fa fa-trash-o" onClick={remove(fullIndex, parentList)}>&nbsp;</button>
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