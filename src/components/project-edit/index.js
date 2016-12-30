import React from 'react';
import './styles.css';
import { Link } from 'react-router';

const ProjectEdit = (props) => {
    const { item, selectedCategoryId } = props;

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
                    <input type="text" value={item.name} onChange={() => {}}/>
                </div>
                <div className="row">
                    <label htmlFor="is-project-active">Active</label>
                    <input type="checkbox" id="is-project-active" checked={item.isActive} onChange={() => {}}/>
                </div>
                <div className="row">
                    <textarea cols="30" rows="10" value={item.description} onChange={() => {}}/>
                </div>
            </form>
        </div>
    );
};

export default ProjectEdit;