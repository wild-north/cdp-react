import React, { Component, PropTypes } from 'react';
import './styles.css';
import classnames from 'classnames';
import { getFullIndex } from '../../helpers';

const EditTitle = ({tmpTitle, onChange, fullIndex, onSave, disableEdit}) => {
    return (
        <div>
            <div className="input-holder">
                <input type="text" value={tmpTitle} className="edit" onChange={onChange}/>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button className="fa fa-check green" onClick={onSave(fullIndex)}>{' '}</button>
                    <button className="fa fa-times red" onClick={disableEdit}>{' '}</button>
                </div>
            </div>

        </div>
    );
};
const Title = ({showOpener, opened, fullIndex, title, enableEdit, onRemove, onToggle, onAdd}) => {
    return (
        <div>
            <div className="input-holder">
                {
                    showOpener ?
                        <button className={classnames("fa fa-angle-double-right opener", {'active': !opened})}
                                onClick={onToggle(fullIndex)} />
                        : null
                }
                <span className="title">{fullIndex} {title}</span>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button title="Edit category name" className="fa fa-pencil-square-o" onClick={enableEdit}>{' '}</button>
                    <button title="Add new category" className="fa fa-plus-square-o" onClick={onAdd(fullIndex)}>{' '}</button>
                    <button title="Delete this category" className="fa fa-trash-o" onClick={onRemove(fullIndex)}>{' '}</button>
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
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
        this.remove = this.remove.bind(this);
        this.toggle = this.toggle.bind(this);
        this.add = this.add.bind(this);
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
    save(index) {
        return () => {
            if (this.props.title !== this.state.tmpTitle) {
                this.props.rename(index, this.state.tmpTitle);
            }
            this.setState(this.defaultState);
        }
    }
    remove(index) {
        return () => {
            this.props.remove(index);
        }
    }
    toggle(index) {
        return () => {
            this.props.toggle(index);
        }
    }
    add(index) {
        return () => {
            const newTitle = prompt('Enter sub-category name', 'New category');
            if (newTitle)
                this.props.add(index, newTitle);
        }
    }

    render() {
        const { children, title, index, parentIndex, opened } = this.props;
        const { editMode, tmpTitle } = this.state;
        const fullIndex = getFullIndex(parentIndex, index);

        return (
            <li className={classnames("category", {'no-children': !children})}>
                {
                    editMode ?
                        <EditTitle  tmpTitle={tmpTitle}
                                    fullIndex={fullIndex}
                                    onSave={this.save}
                                    onChange={this.onChange}
                                    disableEdit={this.disableEdit} />

                      :  <Title     showOpener={!!children}
                                    opened={opened}
                                    fullIndex={fullIndex}
                                    title={title}
                                    enableEdit={this.enableEdit}
                                    onRemove={this.remove}
                                    onToggle={this.toggle}
                                    onAdd={this.add} />
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