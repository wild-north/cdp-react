import React from 'react';
import { Link } from 'react-router';
import './styles.css';

const TodoItem = (props) => {
    const { item, selectedCategoryId, completeTask, uncompleteTask, selectTask } = props;

    const toggleActive = () => item.isActive ? completeTask(item.id) : uncompleteTask(item.id);

    return (
        <tr className="todo-item row">
            <td className="check">
                <input type="checkbox" id={`todo-item-${item.id}`} checked={item.isActive} onChange={toggleActive}/>
            </td>
            <td className="info">
                <label htmlFor={`todo-item-${item.id}`}>{item.name}</label>
            </td>
            <td className="item-actions">
                <div className="actions">
                    <Link to={`/category/${selectedCategoryId}/project/${item.id}`} onClick={() => selectTask(item.id)}>
                        <button className="fa fa-pencil-square-o"/>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default TodoItem;