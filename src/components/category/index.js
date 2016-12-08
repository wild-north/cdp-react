import React, { Component, PropTypes } from 'react';
import './styles.css';
import classnames from 'classnames';
import { getFullIndex } from '../../helpers';

const EditTitle = ({tmpTitle, onChange, fullIndex, rootList, onSave, disableEdit}) => {
    return (
        <div>
            <div className="input-holder">
                <input type="text" value={tmpTitle} className="edit" onChange={onChange}/>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button className="fa fa-check green" onClick={onSave(fullIndex, rootList)}>{' '}</button>
                    <button className="fa fa-times red" onClick={disableEdit}>{' '}</button>
                </div>
            </div>

        </div>
    );
};
const Title = ({showOpener, opened, fullIndex, rootList, title, enableEdit, onRemove, onToggle, onAdd}) => {
    return (
        <div>
            <div className="input-holder">
                {
                    showOpener ?
                        <button className={classnames("fa fa-angle-double-right opener", {'active': !opened})}
                                onClick={onToggle(fullIndex, rootList)} />
                        : null
                }
                <span className="title">{fullIndex} {title}</span>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button title="Edit category name" className="fa fa-pencil-square-o" onClick={enableEdit}>{' '}</button>
                    <button title="Add new category" className="fa fa-plus-square-o" onClick={onAdd(fullIndex, rootList)}>{' '}</button>
                    <button title="Delete this category" className="fa fa-trash-o" onClick={onRemove(fullIndex, rootList)}>{' '}</button>
                </div>
            </div>
        </div>
    );
};


export default class Category extends Component {
    constructor() {
        super();
        this.defaultState = {
            editMode: false,
            tmpTitle: ''
        };
        this.state = this.defaultState;

        this.enableEdit = this.enableEdit.bind(this);
        this.disableEdit = this.disableEdit.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    enableEdit() {
        this.setState({
            tmpTitle: this.props.title,
            editMode: true
        });
    }
    disableEdit() {
        this.setState(this.defaultState);
    }
    onChange(e) {
        this.setState({
            tmpTitle: e.target.value
        });
    }
    onSave(index, list) {
        return () => {
            if (this.props.title !== this.state.tmpTitle) {
                this.props.rename(index, list, this.state.tmpTitle);
            }
            this.setState(this.defaultState);
        }
    }
    onRemove(index, list) {
        return () => {
            this.props.remove(index, list);
        }
    }
    onToggle(index, list) {
        return () => {
            this.props.toggle(index, list);
        }
    }
    onAdd(index, list) {
        return () => {
            const newTitle = prompt('Enter sub-category name', 'New category');
            if (newTitle)
                this.props.add(index, list, newTitle);
        }
    }

    render() {
        const { children, title, index, parentIndex, opened, rootList } = this.props;
        const { editMode, tmpTitle } = this.state;
        const fullIndex = getFullIndex(parentIndex, index);

        return (
            <li className={classnames("category", {'no-children': !children})}>
                {
                    editMode ?
                        <EditTitle  tmpTitle={tmpTitle}
                                    fullIndex={fullIndex}
                                    rootList={rootList}
                                    onSave={this.onSave}
                                    onChange={this.onChange}
                                    disableEdit={this.disableEdit} />

                      :  <Title     showOpener={!!children}
                                    opened={opened}
                                    fullIndex={fullIndex}
                                    rootList={rootList}
                                    title={title}
                                    enableEdit={this.enableEdit}
                                    onRemove={this.onRemove}
                                    onToggle={this.onToggle}
                                    onAdd={this.onAdd} />
                }

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