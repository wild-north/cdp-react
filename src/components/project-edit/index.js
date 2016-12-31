import React from 'react';
import './styles.css';
import { Link } from 'react-router';

const ProjectEdit = (props) => {
    console.log(props);
    const { task, selectedCategoryId, completeTask, uncompleteTask } = props;
    const toggleActive = () => task.isActive ? completeTask(task.id) : uncompleteTask(task.id);
    
    return (
        <div className="content project-info">
            <div className="row default-empty"></div>
            <div className="row right">
                <button className="action-btn accept">Save changes <i className="fa fa-floppy-o"/></button>
                <Link to={`category/${selectedCategoryId}`}>
                    <button className="action-btn decline">Cancel <i className="fa fa-times"/></button>
                </Link>
            </div>
            <form>
                <div className="row">
                    <input type="text" value={task.name} onChange={() => {}}/>
                </div>
                <div className="row">
                    <label htmlFor="is-project-active">Active</label>
                    <input type="checkbox" id="is-project-active" checked={task.isActive} onChange={() => {}}/>
                </div>
                <div className="row">
                    <textarea cols="30" rows="10" value={task.description} onChange={() => {}}/>
                </div>
            </form>
        </div>
    );
};

export default ProjectEdit;