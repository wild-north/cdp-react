import React, { Component } from 'react';
import './styles.css';
import classnames from 'classnames';
import { getFullIndex } from '../../helpers';

class EditTitle extends Component {
    componentDidMount() {
        document.querySelector('.edit-title input[type=text]').focus();
    }
    render() {
        const { tmpTitle, onChange, fullIndex, save, disableEdit } = this.props;

        return (
            <form className="edit-title" action="" onSubmit={save(fullIndex)}>
                <div className="input-holder">
                    <input type="text" value={tmpTitle} className="edit" onChange={onChange}/>
                </div>
                <div className="actions-holder">
                    <div className="actions">
                        <button className="fa fa-check green" type="submit">{' '}</button>
                        <button className="fa fa-times red" onClick={disableEdit}>{' '}</button>
                    </div>
                </div>
            </form>
        );
    }
}

const Title = ({showOpener, opened, fullIndex, title, enableEdit, remove, toggle, add, selectCategory}) => {

    return (
        <div>
            <div className="input-holder">
                {
                    showOpener ?
                        <button onClick={toggle(fullIndex)}
                                className={classnames("fa fa-angle-double-right opener", {'active': !opened})} />
                      : null
                }
                <span className="title" onClick={selectCategory(fullIndex)}>{fullIndex} {title}</span>
            </div>
            <div className="actions-holder">
                <div className="actions">
                    <button title="Edit category name" className="fa fa-pencil-square-o" onClick={enableEdit}>{' '}</button>
                    <button title="Add new category" className="fa fa-plus-square-o" onClick={add(fullIndex)}>{' '}</button>
                    <button title="Delete this category" className="fa fa-trash-o" onClick={remove(fullIndex)}>{' '}</button>
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
        this.selectCategory = this.selectCategory.bind(this);
    }
    enableEdit() {
        this.setState({
            tmpTitle: this.props.title,
            editMode: true
        });
    }
    disableEdit(e) {
        e.preventDefault();
        this.setState(this.defaultState);
    }
    onChange(e) {
        this.setState({
            tmpTitle: e.target.value
        });
    }
    save(index) {
        return (e) => {
            e.preventDefault();
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
    selectCategory(index) {
        return () => {
            this.props.selectCategory(index);
        }
    }

    render() {
        const { children, index, parentIndex, selectedCategory, item } = this.props;
        const { editMode, tmpTitle } = this.state;
        const fullIndex = getFullIndex(parentIndex, index);

        return (
            <li className={classnames("category", {'no-children': !children, 'active': item === selectedCategory})}>
                {
                    editMode ?
                        <EditTitle  tmpTitle={tmpTitle}
                                    fullIndex={fullIndex}
                                    save={this.save}
                                    onChange={this.onChange}
                                    disableEdit={this.disableEdit}
                        />

                    :  <Title       showOpener={!!children}
                                    opened={item.opened}
                                    fullIndex={fullIndex}
                                    title={item.title}
                                    enableEdit={this.enableEdit}
                                    remove={this.remove}
                                    toggle={this.toggle}
                                    add={this.add}
                                    selectCategory={this.selectCategory}
                        />
                }

                {
                    item.opened && children ?
                        children
                        : null
                }
            </li>
        );
    }
};

// Category.propTypes = {
//     index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     title: PropTypes.string.isRequired,
//     parentIndex: PropTypes.number
// };