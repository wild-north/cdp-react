import React from 'react';
import './styles.css';
import AddItemComponent from '../../components/add-item';
import addItemConnector from './connectors/add-item';

const AddItem = addItemConnector(AddItemComponent);

import TodoList from '../../components/todo-list';


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