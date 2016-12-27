import React from 'react';
import './styles.css';
import AddItem from '../../components/add-item';
import TodoList from '../../components/todo-list';


const Content = (props) => {
    return (
        <div className="content">
            <div className="row add-item-holder">
                <AddItem placeholder="Enter item title"/>
            </div>
            <div className="row list-holder">
                <TodoList {...props} />
            </div>
        </div>
    );
};

export default Content;