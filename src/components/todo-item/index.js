import React, { Component } from 'react';
import './styles.css';


const toggleProject = (index, fn) => () => fn(index);

export default class TodoItem extends Component {
    render() {
        const { title, index, onClick, checked, toggle } = this.props;
        const checkboxId = `todo-item-${index}`;
        return (
            <tr className="todo-item row">
                <td className="check">
                    <input type="checkbox" id={checkboxId} checked={checked} onChange={toggleProject(index, toggle)}/>
                </td>
                <td className="info">
                    <label htmlFor={checkboxId}>{title}</label>
                </td>
                <td className="item-actions">
                    <div className="actions">
                        <button className="fa fa-pencil-square-o" onClick={onClick}>{' '}</button>
                    </div>
                </td>
            </tr>
        );
    }
};