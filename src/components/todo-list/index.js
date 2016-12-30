import React from 'react';
import './styles.css';
import TodoItem from '../todo-item';
import { map, filter } from 'lodash';

const TodoList = (props) => {
    const { tasks, selectedCategoryId, completeTask, uncompleteTask, selectTask } = props;
    const list = filter(tasks, {'categoryId': selectedCategoryId});

    return (
        <div className="list-holder">
            <table className="todo-list">
                <tbody>
                    {
                        !list || !list.length
                           ? null
                           : map(list, (item, key) => (
                                    <TodoItem key={key}
                                              item={item}
                                              selectedCategoryId={selectedCategoryId}
                                              completeTask={completeTask}
                                              uncompleteTask={uncompleteTask}
                                              selectTask={selectTask} />
                                )
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;