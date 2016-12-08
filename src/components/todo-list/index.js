import React, { Component } from 'react';
import './styles.css';
import TodoItem from '../todo-item';

const editTodo = () => {
    alert('You trying to edit todo-item');
};

export default class TodoList extends Component {
    render() {
        const { list, toggle } = this.props;

        return (
            <div className="list-holder">
                <table className="todo-list">
                    <tbody>
                        {
                            list && list.length ?
                                list.map(({title, done}, key) => (
                                        <TodoItem key={key}
                                                  onClick={editTodo}
                                                  index={key}
                                                  title={title}
                                                  checked={done}
                                                  toggle={toggle}
                                        />
                                    )
                                )
                                : null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
};