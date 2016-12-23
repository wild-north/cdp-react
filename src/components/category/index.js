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


    render() {
        const { children, item, index, selectedCategoryId, parentIndex, isProjectEditing, selectCategory, add, remove, open, close, rename } = this.props;
        const { editMode, tmpTitle } = this.state;
        const fullIndex = getFullIndex(parentIndex, index);
        const toggle = () => {
            item.opened ? close(item.id) : open(item.id);
        };


        return (
            <li className={classnames("category", {'no-children': !children})}>
                {
                    editMode ?
                        <EditTitle tmpTitle={tmpTitle}
                                   fullIndex={fullIndex}
                                   item={item}
                                   {/*save={save}*/}
                                   onChange={this.onChange}
                                   disableEdit={this.disableEdit}
                        />

                        : <Title showOpener={!!children}
                                 item={item}
                                 fullIndex={fullIndex}
                                 selectedCategoryId={selectedCategoryId}
                                 toggle={toggle}
                                 enableEdit={this.enableEdit}
                                 remove={() => remove(item.id)}
                                 add={() => add(item.id)}
                                 selectCategory={() => selectCategory(item.id)}
                                 isProjectEditing={isProjectEditing}
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