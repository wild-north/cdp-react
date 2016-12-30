import React from 'react';
import './styles.css';
import AddItemComponent from '../../components/add-item';
import addItemConnector from './connectors/add-item';
import TodoListComponent from '../../components/todo-list';
import todoListConnector from './connectors/todo-list';


const AddItem = addItemConnector(AddItemComponent);
const TodoList = todoListConnector(TodoListComponent);


const Content = () => {
    return (
        <div className="content">
            <div className="row add-item-holder">
                <AddItem placeholder="Enter item title"/>
            </div>
            <div className="row list-holder">
                <TodoList />
            </div>
        </div>
    );
};

export default Content;