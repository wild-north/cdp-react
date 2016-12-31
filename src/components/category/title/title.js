import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';


export default (props) => {
    const { item, index, hasChildren, selectedCategoryId, selectedProjectId,
        addCategory, removeCategory, openCategory, closeCategory,
        selectCategory, enableEdit, moveProjectToCategory, selectTask } = props;

    const toggle = () => item.opened ? closeCategory(item.id) : openCategory(item.id);
    const select = () => {
        if (selectedCategoryId !== item.id) {
            selectCategory(item.id);
            selectTask(null);
        }
    };

    return (
        <div>
            <div className="actions-holder">
                {
                    !selectedProjectId
                      ? <div className="actions">
                            <button title="Edit category name" className="fa fa-pencil-square-o" onClick={() => enableEdit(item.id, item.name)} />
                            <button title="Add sub-category" className="fa fa-plus-square-o" onClick={() => addCategory(item.id)} />
                            <button title="Delete this category" className="fa fa-trash-o" onClick={() => removeCategory(item.id)} />
                        </div>
                      : selectedCategoryId === item.id
                          ? null
                          : <div className="actions">
                                <Link to={`/category/${selectedCategoryId}/project/${selectedProjectId}`} onClick={() => moveProjectToCategory(item.id)}>
                                    <button title="Move to this category" className="fa fa-arrow-circle-o-left"/>
                                </Link>
                            </div>
                }

            </div>
            <div className="input-holder">
                {
                    hasChildren
                        ? <button onClick={toggle} className={classnames("fa fa-angle-double-right opener", {'active': !item.opened})}/>
                        : null
                }
                <Link to={`/category/${item.id}`} className="title" activeClassName="active" onClick={select}>
                    <span className={classnames({'active': selectedCategoryId === item.id})}>
                        <small>{index}</small> {item.name}
                    </span>
                </Link>
            </div>
        </div>
    );
};