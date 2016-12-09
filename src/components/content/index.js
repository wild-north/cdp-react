import React, { Component } from 'react';
import './styles.css';

import AddItem from '../add-item';
import TodoList from '../todo-list';


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
                        <TodoList {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
};