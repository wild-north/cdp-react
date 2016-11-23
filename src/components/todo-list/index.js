import React, { Component } from 'react';
import './styles.css';
import TodoItem from '../todo-item';

const editTodo = () => {
    alert('You trying to edit todo-item');
};

export default class TodoList extends Component {
    render() {
        const { list } = this.props;
        console.log(list);
        return (
            <div className="list-holder">
                <table className="todo-list">
                    <tbody>
                        {list.map(({title, index, done}, key) => (
                            <TodoItem key={key}
                                      onClick={editTodo}
                                      index={index}
                                      title={title}
                                      checked={done}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
};