import React, {Component} from 'react';
import './styles.css';
import classnames from 'classnames';
import {getFullIndex} from '../../helpers';
// import {Link} from 'react-router';
// import {SEPARATOR, LINK_SEPARATOR, PROJ_ID} from '../../constants';

class EditTitle extends Component {
    componentDidMount() {
        /* sorry for that but I couldn't find another way for automatic focus */
        document.querySelector('.edit-title input[type=text]').focus();
    }

    render() {
        const { tmpTitle, item, onChange, save, disableEdit } = this.props;

        return (
            <form className="edit-title" action="" onSubmit={save(item.id)}>
                <div className="input-holder">
                    <input type="text" value={tmpTitle || ''} className="edit" onChange={onChange}/>
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

const Title = ({ item, showOpener, fullIndex, enableEdit, remove, toggle, add, selectCategory, routeParams, selectedCategoryId }) => {
    return (
        <div>
            <div className="actions-holder">
                {
                    !routeParams.projectId ?
                        <div className="actions">
                            <button title="Edit category name" className="fa fa-pencil-square-o"
                                    onClick={enableEdit}>{' '}</button>
                            <button title="Add sub-category" className="fa fa-plus-square-o"
                                    onClick={add(item.id)}>{' '}</button>
                            <button title="Delete this category" className="fa fa-trash-o"
                                    onClick={remove(item.id)}>{' '}</button>
                        </div>
                        :
                        <div className="actions">
                            <button title="Move to this category" className="fa fa-arrow-circle-o-left">{' '}</button>
                        </div>
                }

            </div>
            <div className="input-holder">
                {
                    showOpener ?
                        <button onClick={toggle(item.id)}
                                className={classnames("fa fa-angle-double-right opener", {'active': !item.opened})}/>
                        : null
                }
                {/*<Link to={`/category/${fullIndex.split(SEPARATOR).join(LINK_SEPARATOR)}`} activeClassName="active">*/}
                <span onClick={selectCategory(item.id)} className={classnames("title", {'active': item.id === selectedCategoryId})}>
                    <small>{fullIndex}</small> {item.name}
                </span>
                {/*</Link>*/}
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
            tmpTitle: this.props.item.title,
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

    save(id) {
        return (e) => {
            e.preventDefault();
            if (this.props.item.name !== this.state.tmpTitle) {
                this.props.rename(id, this.state.tmpTitle);
            }
            this.setState(this.defaultState);
        }
    }

    remove(id) {
        return () => {
            this.props.remove(id);
        }
    }

    toggle(index) {
        return () => {
            this.props.item.opened ?
                this.props.close(index) :
                this.props.open(index);
        }
    }

    add(id) {
        return () => {
            const newTitle = prompt('Enter sub-category name', 'New category');
            if (newTitle)
                this.props.add(id, newTitle);
        }
    }

    selectCategory(index) {
        return () => {
            this.props.selectCategory(index);
        }
    }

    render() {
        const {children, item, index, routeParams, selectedCategoryId, parentIndex} = this.props;
        const {editMode, tmpTitle} = this.state;
        const fullIndex = getFullIndex(parentIndex, index);

        return (
            <li className={classnames("category", {'no-children': !children})}>
                {
                    editMode ?
                        <EditTitle tmpTitle={tmpTitle}
                                   fullIndex={fullIndex}
                                   item={item}
                                   save={this.save}
                                   onChange={this.onChange}
                                   disableEdit={this.disableEdit}
                        />

                        : <Title showOpener={!!children}
                                 item={item}
                                 fullIndex={fullIndex}
                                 selectedCategoryId={selectedCategoryId}
                                 enableEdit={this.enableEdit}
                                 remove={this.remove}
                                 toggle={this.toggle}
                                 add={this.add}
                                 selectCategory={this.selectCategory}
                                 routeParams={routeParams}
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