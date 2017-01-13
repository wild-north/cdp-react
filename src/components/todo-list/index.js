import React from 'react';
import './styles.css';
import TodoItem from '../todo-item';
import { map, filter } from 'lodash';

const TableHead = () => (
    <thead>
        <tr className="row">
            <th className="is-active">Is done</th>
            <th>Task Name</th>
            <th/>
        </tr>
    </thead>
);

const TodoList = (props) => {
    const { tasks, selectedCategoryId, completeTask, incompleteTask, selectTask } = props;
    const list = filter(tasks, {'categoryId': selectedCategoryId});

    return (
        <div className="list-holder">
            {
                !list || !list.length
                    ? <h2 className="empty-list">{'Unfortunately you have no tasks for this category'}</h2>
                    : <table className="todo-list">
                        <TableHead/>
                        <tbody>
                        {
                            map(list, (item, key) => (
                                    <TodoItem key={key}
                                              item={item}
                                              completeTask={completeTask}
                                              selectedCategoryId={selectedCategoryId}
                                              incompleteTask={incompleteTask}
                                              selectTask={selectTask} />
                                )
                            )
                        }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default TodoList;