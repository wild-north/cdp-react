import React, {Component} from 'react';
import './styles.css';
import classnames from 'classnames';
import { getFullIndex } from '../../helpers';
import EditTitle from './edit-title';
import Title from './title';



export default class Category extends Component {
    constructor() {
        super();
        this.defaultState = {
            editMode: false,
            tmpTitle: ''
        };
        this.state = this.defaultState;

        // this.enableEdit = this.enableEdit.bind(this);
        // this.disableEdit = this.disableEdit.bind(this);
        // this.save = this.save.bind(this);
        // this.onChange = this.onChange.bind(this);
        // this.remove = this.remove.bind(this);
        // this.toggle = this.toggle.bind(this);
        // this.add = this.add.bind(this);
        // this.selectCategory = this.selectCategory.bind(this);
    }

    enableEdit() {
        this.setState({
            tmpTitle: this.props.item.name,
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


    render() {
        const {children, item, index, routeParams, selectedCategoryId, parentIndex, selectCategory, add} = this.props;
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
                                 addCategory={add}
                                 selectCategory={selectCategory}
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