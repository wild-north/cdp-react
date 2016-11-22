import React, { Component } from 'react';
import './styles.css';

import AddItem from '../add-item';
import TodoItem from '../todo-item';

const editTodo = () => {
    alert('You trying to edit todo-item');
};

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
                                <TodoItem onClick={editTodo} index={'1.1.1'} title={'Hello world'}/>
                                <TodoItem onClick={editTodo} index={'1.1.2'} title={'Lorem ipsum'}/>
                                <TodoItem onClick={editTodo} index={'1.1.3'} title={'Solor sit amet'}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};