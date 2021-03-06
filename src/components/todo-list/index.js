import React, { Component } from 'react';
import './styles.css';
import TodoItem from '../todo-item';

export default class TodoList extends Component {
    render() {
        const { list, toggle, routeParams } = this.props;

        return (
            <div className="list-holder">
                <table className="todo-list">
                    <tbody>
                        {
                            list && list.length ?
                                list.map(({title, isActive}, key) => (
                                        <TodoItem key={key}
                                                  index={key}
                                                  title={title}
                                                  isActive={isActive}
                                                  toggle={toggle}
                                                  routeParams={routeParams}
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