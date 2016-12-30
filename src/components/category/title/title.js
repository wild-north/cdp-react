import React from 'react';
import { Link } from 'react-router';
import { SEPARATOR, LINK_SEPARATOR } from '../../../constants';
import { replaceSeparators } from '../../../helpers';
import classnames from 'classnames';
import { isNull, noop } from 'lodash';


export default (props) => {
    const { item, index, hasChildren, selectedCategoryId, editProjectId,
        addCategory, removeCategory, openCategory, closeCategory, selectCategory, enableEdit } = props;
    const fullIndexForLink = replaceSeparators(index, SEPARATOR, LINK_SEPARATOR);
    const toggle = () => item.opened ? openCategory(item.id) : closeCategory(item.id);
    const select = () => selectedCategoryId === item.id ? noop() : selectCategory(item.id);

    return (
        <div>
            <div className="actions-holder">
                {
                    isNull(editProjectId)
                      ? <div className="actions">
                            <button title="Edit category name" className="fa fa-pencil-square-o" onClick={() => enableEdit(item.id, item.name)} />
                            <button title="Add sub-category" className="fa fa-plus-square-o" onClick={() => addCategory(item.id)} />
                            <button title="Delete this category" className="fa fa-trash-o" onClick={() => removeCategory(item.id)} />
                        </div>
                      : <div className="actions">
                            <button title="Move to this category" className="fa fa-arrow-circle-o-left" onClick={() => alert('TODO')}/>
                        </div>
                }

            </div>
            <div className="input-holder">
                {
                    hasChildren
                        ? <button onClick={toggle} className={classnames("fa fa-angle-double-right opener", {'active': !item.opened})}/>
                        : null
                }
                <Link to={`/category/${fullIndexForLink}`} className="title" activeClassName="active" onClick={select}>
                    <small>{index}</small> {item.name}
                </Link>
            </div>
        </div>
    );
};