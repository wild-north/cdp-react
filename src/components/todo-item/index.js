import React, { Component } from 'react';
import './styles.css';

export default class TodoItem extends Component {
    render() {
        const { title, index, onClick, checked } = this.props;
        const checkboxId = `todo-item-${index}`;
        return (
            <tr className="todo-item row">
                <td className="check">
                    <input type="checkbox" id={checkboxId} defaultChecked={checked}/>
                </td>
                <td className="info">
                    <label htmlFor={checkboxId}>{index} {title}</label>
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