import React, { Component } from 'react';
import { Link } from 'react-router';
import { SEPARATOR, LINK_SEPARATOR } from '../../constants';
import { replaceSeparators } from '../../helpers';
import classnames from 'classnames';


export default ({ item, showOpener, fullIndex, enableEdit, remove, toggle, addCategory, selectCategory, routeParams, selectedCategoryId }) => {
    const fullIndexForLink = replaceSeparators(fullIndex, SEPARATOR, LINK_SEPARATOR);

    const add = (id) => () => {
        const newTitle = prompt('Enter sub-category name', 'New category');
        if (newTitle) {
            addCategory(id, newTitle);
        }
    };

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
                    !showOpener ?
                        null :
                        <button onClick={toggle(item.id)}
                                className={classnames("fa fa-angle-double-right opener", {'active': !item.opened})}/>
                }
                <Link to={`/category/${fullIndexForLink}`} className="title" activeClassName="active" onClick={selectCategory}>
                    <small>{fullIndex}</small> {item.name}
                </Link>
            </div>
        </div>
    );
};