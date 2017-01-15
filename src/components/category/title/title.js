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
    const remove = () => {
        if (!confirm('Are you sure?')) return;
        removeCategory(item.id);
    };
    
    const moveToCategory = () => {
        if (!confirm(`Are you sure you want to move this task into category "${item.name}"?`)) return;
        moveProjectToCategory(item.id);
    };

    return (
        <div>
            <div className="actions-holder">
                {
                    !selectedProjectId
                      ? <div className="actions">
                            <button title="Edit category name" className="fa fa-pencil-square-o" onClick={() => enableEdit({ id: item.id, title: item.name }, )} />
                            <button title="Add sub-category" className="fa fa-plus-square-o" onClick={() => addCategory({ parentId: item.id, name: null })} />
                            <button title="Delete this category" className="fa fa-trash-o" onClick={remove} />
                        </div>
                      : <div className={classnames('actions', {'disabled': selectedCategoryId === item.id})}>
                            <Link to={`/category/${item.id}/project/${selectedProjectId}`} onClick={moveToCategory}>
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