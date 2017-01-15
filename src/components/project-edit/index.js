import React from 'react';
import './styles.css';

const ProjectEdit = (props) => {
    const { task, setActive, setInactive, changeDescription, changeName, saveTask, cancelEdit } = props;
    const toggleActive = () => task.done ? setInactive(task.id) : setActive(task.id);
    const save = () => {
        if (!confirm('Save changes?')) return;
        saveTask();
    };
    const cancel = () => {
        if (!confirm('Cancel changes?')) return;
        cancelEdit();
    };
    
    return (
        <div className="content project-info">
            <div className="row default-empty"></div>
            <div className="row right">
                <button className="action-btn accept" onClick={save}>Save changes <i className="fa fa-floppy-o"/></button>
                <button className="action-btn decline" onClick={cancel}>Cancel <i className="fa fa-times"/></button>
            </div>
            <form>
                <div className="row">
                    <input type="text" value={task.name} onChange={(e) => changeName(e.target.value)}/>
                </div>
                <div className="row">
                    <label htmlFor="is-project-active">Active</label>
                    <input type="checkbox" id="is-project-active" checked={!task.done} onChange={toggleActive}/>
                </div>
                <div className="row">
                    <textarea cols="30" rows="10" value={task.description} onChange={(e) => changeDescription(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default ProjectEdit;