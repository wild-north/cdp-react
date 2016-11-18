import React, { Component } from 'react';
import './styles.css';

export default class TodoItem extends Component {
    render() {
        const { title, index, onClick } = this.props;
        const checkboxClass = `todo-item-${index}`;
        return (
            <tr className="todo-item row">
                <td className="check">
                    <input type="checkbox" id={checkboxClass} />
                </td>
                <td className="info">
                    <label htmlFor={checkboxClass}>{index} {title}</label>
                </td>
                <td className="item-actions">
                    <div className="actions">
                        <button className="fa fa-pencil-square-o" onClick={onClick}>&nbsp;</button>
                    </div>
                </td>
            </tr>
        );
    }
};