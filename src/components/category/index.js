import React from 'react';
import './styles.css';
import classnames from 'classnames';
import EditTitle from './edit-title/edit-title';
import editTitleConnector from './edit-title/connector';

import Title from './title/title';
import titleConnector from './title/connector';

const EditTitleConnected = editTitleConnector(EditTitle);


const Category = (props) => {
    const { children, item, index, editCategoryId } = props;
    const isTitleEditing = editCategoryId === item.id;

    const TitleConnected = titleConnector({
        showOpener: !!children,
        item: item,
        index: index,
        isTitleEditing: isTitleEditing
    })(Title);

    return (
        <li className={classnames("category", {'no-children': !children})}>
            { isTitleEditing ? <EditTitleConnected /> : <TitleConnected /> }
            { item.opened && children ? children : null }
        </li>
    );
};

export default Category;