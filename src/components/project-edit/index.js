import React, { Component } from 'react';
import './styles.css';

export default class ProjectEdit extends Component {
    render() {
        return (
            <div className="content project-info">
                <div className="row right">
                    <button className="action-btn accept">Save changes <i className="fa fa-floppy-o">&nbsp;</i></button>
                    <button className="action-btn decline">Cancel <i className="fa fa fa-times">&nbsp;</i></button>
                </div>
                <form action="">
                    <div className="row">
                        <input type="text" value="To-do Item #1"/>
                    </div>
                    <div className="row">
                        <label htmlFor="is-project-active">Active</label>
                        <input type="checkbox" id="is-project-active"/>
                    </div>
                    <div className="row">
                        <textarea cols="30" rows="10">&nbsp;</textarea>
                    </div>
                </form>
            </div>
        );
    }
};