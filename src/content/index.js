import React, { Component } from 'react';
import Actions from '../actions';
import './styles.css';

import AddItem from '../add-item';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="add-item-holder">
                        <AddItem placeholder="Enter item title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="list-holder">
                        <table className="todo-list">
                            <tbody>
                                <tr className="todo-item row">
                                    <td className="check">
                                        <input type="checkbox" id="todo-item-1" />
                                    </td>
                                    <td className="info">
                                        <label htmlFor="todo-item-1">To-Do item #n</label>
                                    </td>
                                    <td className="item-actions">
                                        <Actions/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};