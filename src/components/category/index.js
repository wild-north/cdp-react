import React from 'react';
import './styles.css';
import classnames from 'classnames';
import { getFullIndex } from '../../helpers';
import EditTitle from './edit-title/edit-title';
import editTitleConnector from './edit-title/connector';

import Title from './title/title';
// import { noop } from 'lodash';


const Category = (props) => {
    const { children, item, index, selectedCategoryId, parentIndex,
        editCategoryId, selectCategory, add, remove, open, close, enableEdit } = props;
    const fullIndex = getFullIndex(parentIndex, index);
    const toggle = () => {
        item.opened ? close(item.id) : open(item.id);
    };
    const isTitleEditing = editCategoryId === item.id;
    const EditTitleConnected = editTitleConnector()(EditTitle);

    return (
        <li className={classnames("category", {'no-children': !children})}>
            {
                isTitleEditing
                    ? <EditTitleConnected />

                    : <Title showOpener={!!children}
                             item={item}
                             fullIndex={fullIndex}
                             selectedCategoryId={selectedCategoryId}
                             toggle={toggle}
                             enableEdit={() => enableEdit(item.id, item.name)}
                             remove={() => remove(item.id)}
                             add={() => add(item.id)}
                             selectCategory={() => selectCategory(item.id)}
                             isTitleEditing={isTitleEditing}
                    />
            }

            {
                item.opened && children ?
                    children
                    : null
            }
        </li>
    );
};

export default Category;