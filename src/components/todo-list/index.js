import React from 'react';
import './styles.css';
import TodoItem from '../todo-item';
import { map, filter } from 'lodash';

/*const TableHead = () => (
    <thead>
    <tr className="row">
        <th className="is-active">
            Done
        </th>
        <th>
            Task Name
        </th>
        <th></th>
    </tr>
    </thead>
);*/

const TodoList = (props) => {
    const { tasks, selectedCategoryId, completeTask, uncompleteTask, selectTask } = props;
    const list = filter(tasks, {'categoryId': selectedCategoryId});

    return (
        <div className="list-holder">
            <table className="todo-list">
                <tbody>
                    {
                        !list || !list.length
                           ? <tr>
                                <td colSpan="3"><h2>{'Unfortunately you have no tasks for this category'}</h2></td>
                            </tr>
                           : map(list, (item, key) => (
                                    <TodoItem key={key}
                                              item={item}
                                              completeTask={completeTask}
                                              selectedCategoryId={selectedCategoryId}
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