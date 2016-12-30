import React from 'react';
import './styles.css';
import classnames from 'classnames';
import EditTitleComponent from './edit-title/edit-title';
import editTitleConnector from './edit-title/connector';

import TitleComponent from './title/title';
import titleConnector from './title/connector';
const EditTitle = editTitleConnector(EditTitleComponent);


const Category = (props) => {
    const { children, item, index, editCategoryId } = props;
    const isTitleEditing = editCategoryId === item.id;

    const Title = titleConnector({
        hasChildren: !!children,
        item: item,
        index: index,
        isTitleEditing: isTitleEditing
    })(TitleComponent);

    return (
        <li className={classnames("category", {'no-children': !children})}>
            { isTitleEditing ? <EditTitle/> : <Title/> }
            { item.opened && children ? children : null }
        </li>
    );
};

export default Category;