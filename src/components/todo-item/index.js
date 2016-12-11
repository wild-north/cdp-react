import React from 'react';
import { Link } from 'react-router';
import './styles.css';
import { CAT_ID } from '../../constants';

const toggleProject = (index, fn) => () => fn(index);

const TodoItem = (props) => {
        const { title, index, isActive, toggle, routeParams } = props;
        const checkboxId = `todo-item-${index}`;
        
        return (
            <tr className="todo-item row">
                <td className="check">
                    <input type="checkbox" id={checkboxId} checked={isActive} onChange={toggleProject(index, toggle)}/>
                </td>
                <td className="info">
                    <label htmlFor={checkboxId}>{title}</label>
                </td>
                <td className="item-actions">
                    <div className="actions">
                        <Link to={`/category/${routeParams[CAT_ID]}/project/${index + 1}`}>
                            <button className="fa fa-pencil-square-o">{' '}</button>
                        </Link>
                    </div>
                </td>
            </tr>
        );
};

export default TodoItem;